"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import type {
  AuthContextValue,
  AuthStatus,
  AuthUser,
  SignInCredentials,
} from "@/lib/auth/auth-types";
import {
  clearPersistedUser,
  getPersistedUser,
  mockAuthenticate,
  mockSignOut,
  persistUser,
} from "@/lib/auth/mock-auth";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [authState, setAuthState] = useState<{
    user: AuthUser | null;
    status: AuthStatus;
  }>(() => {
    const storedUser = getPersistedUser();
    return {
      user: storedUser,
      status: storedUser ? "authenticated" : "unauthenticated",
    };
  });

  const { user, status } = authState;

  const signIn = useCallback(async (credentials: SignInCredentials) => {
    setAuthState((prev) => ({ ...prev, status: "loading" }));
    try {
      const result = await mockAuthenticate(credentials);
      setAuthState({ user: result.user, status: "authenticated" });
      persistUser(result.user, credentials.remember);
    } catch (error) {
      setAuthState({ user: null, status: "unauthenticated" });
      throw error;
    }
  }, []);

  const signOut = useCallback(async () => {
    setAuthState((prev) => ({ ...prev, status: "loading" }));
    await mockSignOut();
    clearPersistedUser();
    setAuthState({ user: null, status: "unauthenticated" });
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      status,
      signIn,
      signOut,
    }),
    [signIn, signOut, status, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

