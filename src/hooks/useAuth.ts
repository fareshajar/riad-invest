import { useState, useEffect } from 'react';

interface Session {
  user: {
    id: string;
    email: string;
  };
}

export const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for an existing session (e.g., from localStorage)
    const storedSession = localStorage.getItem('mock_session');
    if (storedSession) {
      setSession(JSON.parse(storedSession));
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

    if (email === 'fareshajar2@gmail.com' && password === 'fareshajar2002') {
      const mockSession: Session = {
        user: {
          id: 'mock-user-id-123',
          email: email,
        },
      };
      setSession(mockSession);
      localStorage.setItem('mock_session', JSON.stringify(mockSession));
      setLoading(false);
      return { data: mockSession, error: null };
    } else {
      setLoading(false);
      return { data: { user: null }, error: { message: 'Email ou mot de passe incorrect.' } };
    }
  };

  const signOut = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

    setSession(null);
    localStorage.removeItem('mock_session');
    setLoading(false);
    return { error: null };
  };

  return { session, loading, signIn, signOut };
};
