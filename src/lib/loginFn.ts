import { createServerFn } from "@tanstack/react-start";
import { env } from "cloudflare:workers";

export const loginFn = createServerFn({ method: "POST" })
  .inputValidator((data: { username: string; password: string }) => data)
  .handler(async (ctx) => {
    const validLogin = env.LOGIN;
    const validPassword = env.PASSWORD;

    const debug = {
      LOGIN_defined: !!validLogin,
      PASSWORD_defined: !!validPassword,
      env_keys: Object.keys(env as Record<string, unknown>),
    };

    if (!validLogin || !validPassword) {
      return { ok: false as const, reason: "not_configured" as const, debug };
    }

    if (ctx.data.username === validLogin && ctx.data.password === validPassword) {
      return { ok: true as const, debug };
    }

    return { ok: false as const, reason: "wrong_credentials" as const, debug };
  });
