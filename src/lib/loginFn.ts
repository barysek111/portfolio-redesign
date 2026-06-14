import { createServerFn } from "@tanstack/react-start";

async function getEnvVars(): Promise<Record<string, string | undefined>> {
  try {
    const m = await import("cloudflare:workers");
    const cfEnv = (m as { env?: Record<string, string | undefined> }).env;
    if (cfEnv) return cfEnv;
  } catch {
    // not running in Cloudflare Workers — fall through to process.env
  }
  return process.env as Record<string, string | undefined>;
}

export const loginFn = createServerFn({ method: "POST" })
  .inputValidator((data: { username: string; password: string }) => data)
  .handler(async (ctx) => {
    const envVars = await getEnvVars();
    const validLogin = envVars.LOGIN;
    const validPassword = envVars.PASSWORD;

    const debug = {
      LOGIN_defined: !!validLogin,
      PASSWORD_defined: !!validPassword,
    };

    if (!validLogin || !validPassword) {
      return { ok: false as const, reason: "not_configured" as const, debug };
    }

    if (ctx.data.username === validLogin && ctx.data.password === validPassword) {
      return { ok: true as const, debug };
    }

    return { ok: false as const, reason: "wrong_credentials" as const, debug };
  });
