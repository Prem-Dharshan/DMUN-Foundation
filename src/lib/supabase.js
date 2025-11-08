import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database helper functions
export const executivesDb = {
  // Get all users
  async getUsers() {
    const { data, error } = await supabase
      .from('executives')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  // Get user by email
  async getUserByEmail(email) {
    const { data, error } = await supabase
      .from('executives')
      .select('*')
      .eq('email', email)
      .single();
    
    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  // Create new user
  async createUser(userData) {
    const { data, error } = await supabase
      .from('executives')
      .insert([userData])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Update user
  async updateUser(id, updates) {
    const { data, error } = await supabase
      .from('executives')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Delete user
  async deleteUser(id) {
    const { error } = await supabase
      .from('executives')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  // Get all messages
  async getMessages() {
    const { data, error } = await supabase
      .from('messages')
      .select('*, sender:executives!messages_sender_id_fkey(name, email, role)')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  // Create message
  async createMessage(messageData) {
    const { data, error } = await supabase
      .from('messages')
      .insert([messageData])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Get message responses
  async getMessageResponses(messageId) {
    const { data, error } = await supabase
      .from('message_responses')
      .select('*, user:executives!message_responses_user_id_fkey(name, email)')
      .eq('message_id', messageId);
    
    if (error) throw error;
    return data;
  },

  // Submit response
  async submitResponse(responseData) {
    const { data, error } = await supabase
      .from('message_responses')
      .upsert([responseData], { onConflict: 'message_id,user_id' })
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};
