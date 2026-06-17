import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Button } from "@/components/ui/Button";
import { SiteFooter } from "@/components/shared/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-h1 text-foreground">404</h1>
        <h2 className="mt-05 text-h3 text-foreground">Page not found</h2>
        <p className="mt-04 text-s text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-06">
          <Button variant="arrow" to="/" className="w-auto">Go home</Button>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-h3 text-foreground">
          This page didn't load
        </h1>
        <p className="mt-04 text-s text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-06 flex flex-wrap justify-center gap-03">
          <Button
            variant="default"
            onClick={() => { router.invalidate(); reset(); }}
            className="w-auto justify-center"
          >
            Try again
          </Button>
          <Button variant="arrow" to="/" className="w-auto">
            Go home
          </Button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Barbora Gadlinova UX/UI" },
      { name: "description", content: "Portfolio of Barbora Gadlinova — designer crafting intuitive digital interfaces." },
      { name: "author", content: "Barbora Gadlinova" },
      { property: "og:title", content: "Barbora Gadlinova — Portfolio" },
      { property: "og:description", content: "Designing for the future of tech and lifestyle." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "icon",
        href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>B</text></svg>",
      },
      {
        rel: "preload",
        href: "/fonts/NHaasGroteskTXPro-55Rg.otf",
        as: "font",
        type: "font/otf",
        crossOrigin: "anonymous",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const NO_FOOTER_ROUTES = ["/work-with-me"];

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <Outlet />
      </div>
      {!NO_FOOTER_ROUTES.includes(pathname) && <SiteFooter />}
    </QueryClientProvider>
  );
}
