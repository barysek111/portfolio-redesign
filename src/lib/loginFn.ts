import { createServerFn } from "@tanstack/react-start";

export const loginFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    if (
      typeof data !== "object" ||
      data === null ||
      typeof (data as Record<string, unknown>).username !== "string" ||
      typeof (data as Record<string, unknown>).password !== "string"
    ) {
      throw new Error("Invalid input");
    }
    return data as { username: string; password: string };
  })
  .handler(async ({ data }) => {
    const validLogin = process.env.LOGIN;
    const validPassword = process.env.PASSWORD;

    if (!validLogin || !validPassword) {
      return { ok: false, reason: "not_configured" as const };
    }

    if (data.username === validLogin && data.password === validPassword) {
      return { ok: true };
    }

    return { ok: false, reason: "wrong_credentials" as const };
  });
