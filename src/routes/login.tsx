import { createFileRoute, redirect } from "@tanstack/react-router";
import LoginPage from "@/components/auth/LoginPage";
import { isAuthenticated } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  beforeLoad: () => {
    if (typeof window !== "undefined" && isAuthenticated()) {
      throw redirect({ to: "/" });
    }
  },
  component: LoginPage,
});
