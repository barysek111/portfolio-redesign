const AUTH_KEY = "portfolio_auth";

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(AUTH_KEY) === "true";
}

export function login(username: string, password: string): boolean {
  const validLogin = import.meta.env.VITE_LOGIN;
  const validPassword = import.meta.env.VITE_PASSWORD;
  if (username === validLogin && password === validPassword) {
    sessionStorage.setItem(AUTH_KEY, "true");
    return true;
  }
  return false;
}

export function logout(): void {
  sessionStorage.removeItem(AUTH_KEY);
}
