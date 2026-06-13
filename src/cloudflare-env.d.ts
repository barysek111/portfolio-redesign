declare module "cloudflare:workers" {
  const env: {
    LOGIN?: string;
    PASSWORD?: string;
    [key: string]: string | undefined;
  };
  export { env };
}
