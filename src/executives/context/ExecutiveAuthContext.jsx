import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, executivesDb } from '@/lib/supabase';
import rbacConfig from '../../../data/rbac.json';

const ExecutiveAuthContext = createContext({});

export const useExecutiveAuth = () => {
  const context = useContext(ExecutiveAuthContext);
  if (!context) {
    throw new Error('useExecutiveAuth must be used within ExecutiveAuthProvider');
  }
  return context;
};

export const ExecutiveAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session?.user) {
        loadUserData(session.user.email);
      } else {
        setLoading(false);
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session?.user) {
        loadUserData(session.user.email);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadUserData = async (email) => {
    try {
      const userData = await executivesDb.getUserByEmail(email);
      setUser(userData);
    } catch (error) {
      console.error('Error loading user data:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email) => {
    // Validate @dmun.org domain
    if (!email.endsWith('@dmun.org')) {
      throw new Error('Only @dmun.org email addresses are allowed');
    }

    // Check if user exists in database
    const existingUser = await executivesDb.getUserByEmail(email);
    if (!existingUser) {
      throw new Error('User not found. Please contact the administrator.');
    }

    // Send magic link
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/executives/dashboard`,
      },
    });

    if (error) throw error;
    return data;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setUser(null);
    setSession(null);
  };

  const hasPermission = (permission) => {
    if (!user) return false;
    const roleConfig = rbacConfig.roles[user.role];
    return roleConfig?.permissions.includes(permission) || false;
  };

  const isLead = () => user?.role === 'lead';
  const isCoLead = () => user?.role === 'colead';
  const isGeneral = () => user?.role === 'general';

  const value = {
    user,
    session,
    loading,
    signIn,
    signOut,
    hasPermission,
    isLead,
    isCoLead,
    isGeneral,
    refreshUser: () => user?.email && loadUserData(user.email),
  };

  return (
    <ExecutiveAuthContext.Provider value={value}>
      {children}
    </ExecutiveAuthContext.Provider>
  );
};
