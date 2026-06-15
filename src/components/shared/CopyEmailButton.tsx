import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { EMAIL } from "@/lib/aboutContent";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <Button variant="dual" left={EMAIL} right={copied ? "copied" : "copy"} onClick={handleCopy} />
  );
}
