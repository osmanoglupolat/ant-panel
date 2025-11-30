import type { AuthUser, SignInCredentials } from "@/lib/auth/auth-types";

const AUTH_DELAY_MS = 650;
const SIGN_OUT_DELAY_MS = 350;
const STORAGE_KEY = "ant-panel.auth.user";

export const DEMO_CREDENTIALS: SignInCredentials = {
  email: "admin@antpanel.dev",
  password: "Demo123!",
};

export const DEMO_USER: AuthUser = {
  id: "demo-user",
  name: "Demo Admin",
  email: DEMO_CREDENTIALS.email,
  avatar: "/avatars/shadcn.jpg",
};

const delay = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export async function mockAuthenticate(credentials: SignInCredentials) {
  await delay(AUTH_DELAY_MS);

  const email = credentials.email.trim().toLowerCase();
  const password = credentials.password.trim();

  const isEmailMatch = email === DEMO_CREDENTIALS.email;
  const isPasswordMatch = password === DEMO_CREDENTIALS.password;

  if (!isEmailMatch || !isPasswordMatch) {
    throw new Error("The email or password you entered is incorrect.");
  }

  return { user: DEMO_USER };
}

export async function mockSignOut() {
  await delay(SIGN_OUT_DELAY_MS);
}

export function persistUser(user: AuthUser, remember?: boolean) {
  if (typeof window === "undefined") return;

  const storage = remember ? localStorage : sessionStorage;
  storage.setItem(STORAGE_KEY, JSON.stringify(user));

  const otherStorage = remember ? sessionStorage : localStorage;
  otherStorage.removeItem(STORAGE_KEY);
}

export function clearPersistedUser() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(STORAGE_KEY);
}

export function getPersistedUser(): AuthUser | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY) ?? sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch (error) {
    console.error("Failed to parse stored auth user", error);
    clearPersistedUser();
    return null;
  }
}

