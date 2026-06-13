import { createServerFn } from "@tanstack/react-start";

export const loginFn = createServerFn({ method: "POST" })
  .inputValidator((data: { username: string; password: string }) => data)
  .handler(async (ctx) => {
    const validLogin = process.env.LOGIN;
    const validPassword = process.env.PASSWORD;

    if (!validLogin || !validPassword) {
      return { ok: false as const, reason: "not_configured" as const };
    }

    if (ctx.data.username === validLogin && ctx.data.password === validPassword) {
      return { ok: true as const };
    }

    return { ok: false as const, reason: "wrong_credentials" as const };
  });
