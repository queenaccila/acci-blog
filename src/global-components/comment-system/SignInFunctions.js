import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true, // 🔹 ensures session stays across refresh/navigation
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
);

export async function signInWithProvider(providerName) {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: providerName,
    })
}

// sign out of any oauth application
export async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error("Sign out error:", error.message);
    }
    return { error };
}

// current user session
export async function getUser() {
    const {
        data: { user },
    } = await supabase.auth.getUser();
    return user;
}