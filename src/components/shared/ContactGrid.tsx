import { useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CopyEmailButton } from "@/components/shared/CopyEmailButton";

const borderStyle = { borderColor: "color-mix(in srgb, var(--white) 20%, transparent)" };
const inputStyle = { ...borderStyle, color: "var(--white)", fontSize: "var(--text-body)" };

const inputClass =
  "w-full bg-transparent border rounded-full shadow-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 transition-colors placeholder:text-muted-foreground";

const textareaClass =
  "w-full bg-transparent border shadow-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 transition-colors resize-none placeholder:text-muted-foreground";

const fieldPadding = {
  paddingTop: "var(--spacing-03)",
  paddingBottom: "var(--spacing-03)",
  paddingLeft: "var(--spacing-04)",
  paddingRight: "var(--spacing-04)",
};
const inputHeight = { height: "var(--btn-height)" };

function ContactForm() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    formRef.current?.reset();
  }

  if (sent) {
    return <p role="status" className="text-body m-0">Thanks — I'll be in touch soon.</p>;
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-03">
      <label htmlFor={nameId} className="sr-only">Name</label>
      <Input id={nameId} required placeholder="Name" className={inputClass} style={{ ...inputStyle, ...fieldPadding, ...inputHeight }} />
      <label htmlFor={emailId} className="sr-only">Email address</label>
      <Input id={emailId} required type="email" placeholder="Email" className={inputClass} style={{ ...inputStyle, ...fieldPadding, ...inputHeight }} />
      <label htmlFor={messageId} className="sr-only">Message</label>
      <Textarea id={messageId} required placeholder="Message" rows={3} className={textareaClass} style={{ ...inputStyle, ...fieldPadding, borderRadius: "13px" }} />
      <Button variant="arrow" type="submit" className="w-full">
        Send
      </Button>
    </form>
  );
}

export function ContactGrid() {
  return (
    <div className="grid grid-cols-1 gap-07 md:grid-cols-12 md:gap-x-03 md:gap-y-0 items-start">

      {/* Col 1: Let's build together */}
      <div className="md:col-span-3 flex flex-col">
        <p className="text-body m-0" style={{ color: "var(--white)", fontSize: "var(--text-body)" }}>Let's build together?</p>
        <div className="pt-04 flex flex-col gap-03">
          <p className="text-body m-0 text-muted-foreground">
            Available for product design roles and freelance projects.
          </p>
          <p className="text-xs m-0 text-muted-foreground">Copenhagen / Remote</p>
        </div>
      </div>

      {/* Col 2: Links */}
      <div className="md:col-span-3 flex flex-col">
        <p className="text-body m-0" style={{ color: "var(--white)", fontSize: "var(--text-body)" }}>Links</p>
        <div className="pt-04 flex flex-col gap-03">
          <Button variant="arrow" href="https://www.linkedin.com/in/barboragadlinova/">LinkedIn</Button>
          <Button variant="arrow" href="https://drive.google.com/file/d/1LpCfCp_pGDMXybvYA6mNpW9bz-8PGaUR/view?usp=sharing">View Resume</Button>
          <CopyEmailButton />
        </div>
      </div>

      {/* Col 3: Contact form */}
      <div className="md:col-start-9 md:col-span-4 flex flex-col">
        <p className="text-body m-0" style={{ color: "var(--white)", fontSize: "var(--text-body)" }}>Contact</p>
        <div className="pt-04">
          <ContactForm />
        </div>
      </div>

    </div>
  );
}
