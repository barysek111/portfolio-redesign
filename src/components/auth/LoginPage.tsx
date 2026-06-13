import { useState, useId } from "react";
import { motion } from "motion/react";
import { attemptLogin } from "@/lib/auth";

interface Props {
  onSuccess: () => void;
}

export default function LoginPage({ onSuccess }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const loginId = useId();
  const passwordId = useId();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    await new Promise((r) => setTimeout(r, 280));

    if (attemptLogin(username, password)) {
      onSuccess();
    } else {
      setError(true);
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full max-w-[360px]"
      >
        <div className="mb-10">
          <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h1 className="text-h3 text-foreground">Welcome back</h1>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-7">
          <div className="flex flex-col gap-2">
            <label
              htmlFor={loginId}
              className="text-xs text-muted-foreground tracking-wide uppercase"
            >
              Login
            </label>
            <input
              id={loginId}
              type="text"
              autoComplete="username"
              autoFocus
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError(false);
              }}
              className="w-full bg-transparent border-b border-border text-foreground text-s py-2 outline-none placeholder:text-muted-foreground/40 focus:border-foreground transition-colors duration-200"
              placeholder="your login"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor={passwordId}
              className="text-xs text-muted-foreground tracking-wide uppercase"
            >
              Password
            </label>
            <input
              id={passwordId}
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className="w-full bg-transparent border-b border-border text-foreground text-s py-2 outline-none placeholder:text-muted-foreground/40 focus:border-foreground transition-colors duration-200"
              placeholder="••••••••"
            />
          </div>

          <div className="pt-2">
            <motion.button
              type="submit"
              disabled={submitting || !username || !password}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-primary-foreground text-s py-3 rounded-sm font-medium transition-opacity disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
              {submitting ? "Checking…" : "Enter"}
            </motion.button>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-xs text-muted-foreground text-center"
              >
                Wrong credentials — try again
              </motion.p>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
}
