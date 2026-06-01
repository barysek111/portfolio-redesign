import { createFileRoute } from "@tanstack/react-router";
import AiDesignHomepage from "@/components/home/AiDesignHomepage";

export const Route = createFileRoute("/")({
  component: AiDesignHomepage,
});
