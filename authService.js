import supabase from './supabaseClient';

// Kullanıcı kaydı
export const signUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({ email, password });
  return { user, error };
};

// Kullanıcı girişi
export const signIn = async (email, password) => {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  return { user, error };
};

// Kullanıcı çıkışı
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return error;
};