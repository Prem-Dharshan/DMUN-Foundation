import React, { createContext, useContext, useState, useEffect } from 'react';
import orchestrationRules from '../../data/orchestration-rules.json';

const OrchestrationContext = createContext();

export const useOrchestration = () => {
  const context = useContext(OrchestrationContext);
  if (!context) {
    throw new Error('useOrchestration must be used within OrchestrationProvider');
  }
  return context;
};

export const OrchestrationProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showRoleSelector, setShowRoleSelector] = useState(false);
  const [dismissedBanners, setDismissedBanners] = useState([]);

  // Load user role from localStorage on mount
  useEffect(() => {
    const savedRole = localStorage.getItem('dmun_user_role');
    const savedDismissals = JSON.parse(localStorage.getItem('dmun_dismissed_banners') || '[]');
    const hasVisited = localStorage.getItem('dmun_has_visited');
    
    setDismissedBanners(savedDismissals);

    if (savedRole && orchestrationRules.roles[savedRole]) {
      setUserRole(savedRole);
    } else {
      setUserRole('default');
      // Show role selector for first-time visitors
      if (!hasVisited && orchestrationRules.globalSettings.roleSelectionPrompt.showOnFirstVisit) {
        setTimeout(() => setShowRoleSelector(true), 2000); // Show after 2 seconds
      }
    }
    
    localStorage.setItem('dmun_has_visited', 'true');
    setIsLoading(false);
  }, []);

  // Save role to localStorage when changed
  const changeUserRole = (newRole) => {
    if (orchestrationRules.roles[newRole]) {
      setUserRole(newRole);
      localStorage.setItem('dmun_user_role', newRole);
      setShowRoleSelector(false);
      // Clear dismissed banners when role changes
      setDismissedBanners([]);
      localStorage.removeItem('dmun_dismissed_banners');
    }
  };

  // Get current role configuration
  const getRoleConfig = () => {
    return orchestrationRules.roles[userRole] || orchestrationRules.roles.default;
  };

  // Get content modifications for current role
  const getContentModifications = () => {
    const config = getRoleConfig();
    return config.contentModifications;
  };

  // Get wording override for a specific term
  const getWording = (originalTerm) => {
    const modifications = getContentModifications();
    const lowerTerm = originalTerm.toLowerCase();
    return modifications.wordingOverrides[lowerTerm] || originalTerm;
  };

  // Get active banners for current role (not dismissed)
  const getActiveBanners = () => {
    const modifications = getContentModifications();
    return (modifications.banners || []).filter(
      banner => !dismissedBanners.includes(banner.id)
    );
  };

  // Dismiss a banner
  const dismissBanner = (bannerId) => {
    const newDismissals = [...dismissedBanners, bannerId];
    setDismissedBanners(newDismissals);
    localStorage.setItem('dmun_dismissed_banners', JSON.stringify(newDismissals));
  };

  // Check if a section should be highlighted
  const isSectionHighlighted = (sectionId) => {
    const modifications = getContentModifications();
    const highlighted = modifications.highlightedSections || [];
    return highlighted.includes('all') || highlighted.includes(sectionId);
  };

  // Get personalized content settings
  const getPersonalizedContent = () => {
    const modifications = getContentModifications();
    return modifications.personalizedContent || {};
  };

  // Get hero message
  const getHeroMessage = () => {
    const modifications = getContentModifications();
    return modifications.heroMessage;
  };

  // Get all available roles for selection
  const getAvailableRoles = () => {
    return Object.entries(orchestrationRules.roles)
      .filter(([key]) => key !== 'default')
      .map(([key, value]) => ({
        id: key,
        name: value.name,
        description: value.description
      }))
      .sort((a, b) => {
        const aPriority = orchestrationRules.roles[a.id].priority;
        const bPriority = orchestrationRules.roles[b.id].priority;
        return aPriority - bPriority;
      });
  };

  const value = {
    userRole,
    changeUserRole,
    getRoleConfig,
    getContentModifications,
    getWording,
    getActiveBanners,
    dismissBanner,
    isSectionHighlighted,
    getPersonalizedContent,
    getHeroMessage,
    getAvailableRoles,
    showRoleSelector,
    setShowRoleSelector,
    isLoading,
    orchestrationEnabled: orchestrationRules.globalSettings.enableOrchestration
  };

  return (
    <OrchestrationContext.Provider value={value}>
      {children}
    </OrchestrationContext.Provider>
  );
};

export default OrchestrationContext;
