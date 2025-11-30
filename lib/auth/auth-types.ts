export type AuthStatus = "idle" | "loading" | "authenticated" | "unauthenticated";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

export type SignInCredentials = {
  email: string;
  password: string;
  remember?: boolean;
};

export type AuthContextValue = {
  user: AuthUser | null;
  status: AuthStatus;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
};

