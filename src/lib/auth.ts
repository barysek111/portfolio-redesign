const AUTH_KEY = "portfolio_auth";

export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(AUTH_KEY) === "true";
}

export function setAuthenticated(): void {
  sessionStorage.setItem(AUTH_KEY, "true");
}
