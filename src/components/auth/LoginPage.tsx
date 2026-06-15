import { useState, useId } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { loginFn } from "@/lib/loginFn";
import { setAuthenticated } from "@/lib/auth";

interface Props {
  onSuccess: () => void;
}

export default function LoginPage({ onSuccess }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [debug, setDebug] = useState<Record<string, unknown> | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const loginId = useId();
  const passwordId = useId();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const result = await loginFn({ data: { username, password } });
      if ("debug" in result) setDebug(result.debug as Record<string, unknown>);
      if (result.ok) {
        setAuthenticated();
        onSuccess();
      } else if ("reason" in result && result.reason === "not_configured") {
        setError("not_configured");
      } else {
        setError("Wrong credentials — try again.");
      }
    } catch (e) {
      setError(`Error: ${e instanceof Error ? e.message : String(e)}`);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-06">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full max-w-[360px]"
      >
        <div className="mb-10">
          <p className="text-xs text-muted-foreground tracking-widest uppercase mb-05">
            Portfolio
          </p>
          <h1 className="text-h3 text-foreground">Welcome back</h1>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-07">
          <div className="flex flex-col gap-03">
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
                setError(null);
              }}
              className="w-full bg-transparent border-b border-border text-foreground text-s py-03 outline-none placeholder:text-muted-foreground/40 focus:border-foreground transition-colors duration-200"
              placeholder="your login"
            />
          </div>

          <div className="flex flex-col gap-03">
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
                setError(null);
              }}
              className="w-full bg-transparent border-b border-border text-foreground text-s py-03 outline-none placeholder:text-muted-foreground/40 focus:border-foreground transition-colors duration-200"
              placeholder="••••••••"
            />
          </div>

          <div className="pt-03">
            <Button
              variant="default"
              type="submit"
              disabled={submitting || !username || !password}
              className="w-full justify-center"
            >
              {submitting ? "Checking…" : "Enter"}
            </Button>

            {error && (
              <motion.div
                role="alert"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-05 flex flex-col gap-04"
              >
                <p className="text-xs text-muted-foreground text-center">{error}</p>
                {debug && (
                  <pre className="text-xs text-muted-foreground bg-surface rounded p-04 overflow-auto whitespace-pre-wrap break-all">
                    {JSON.stringify(debug, null, 2)}
                  </pre>
                )}
              </motion.div>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
}
