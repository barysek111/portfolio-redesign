import { useEffect, useRef, useState } from "react";
import { SiteTopNav } from "@/components/nav/SiteTopNav";
import { ChapterIntroIcon, type ChapterIntroId } from "@/components/project/CaseChapterIcons";
import { CopyEmailButton } from "@/components/shared/CopyEmailButton";
import { EditorialList } from "@/components/shared/EditorialList";
import { Button } from "@/components/ui/Button";
import { education, experience, services, WINDOWS } from "@/lib/aboutContent";

function PhotoSlideshow() {
  // Each window gets a monotonically increasing z-index when it's "popped"
  const [zIndexes, setZIndexes] = useState<number[]>(Array(WINDOWS.length).fill(0));
  const counter = useRef(0);
  const slot = useRef(0);

  useEffect(() => {
    const tick = () => {
      const winIdx = slot.current % WINDOWS.length;
      counter.current += 1;
      const z = counter.current;
      setZIndexes(prev => { const n = [...prev]; n[winIdx] = z; return n; });
      slot.current += 1;
    };
    tick();
    const id = setInterval(tick, 300);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", overflow: "hidden" }}>
      {WINDOWS.map((w, i) => (
        <img
          key={w.src}
          src={w.src}
          alt=""
          draggable={false}
          style={{
            position: "absolute",
            width: "58%",
            height: "auto",
            left: `${w.left}%`,
            top: `${w.top}%`,
            zIndex: zIndexes[i],
            opacity: zIndexes[i] > 0 ? 1 : 0,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      ))}
    </div>
  );
}

function ServiceCard({ icon, title, text }: { icon: ChapterIntroId; title: string; text: string }) {
  return (
    <div
      className="flex flex-col gap-05 h-full rounded-[var(--case-radius-outer)] p-05"
      style={{ background: "var(--foreground)" }}
    >
      <div
        style={{
          color: "var(--card)",
          filter: "drop-shadow(0 1px 6px color-mix(in srgb, var(--white) 18%, transparent))",
          alignSelf: "flex-start",
        }}
      >
        <ChapterIntroIcon
          chapterId={icon}
          className="about-service__icon block w-[100px] h-[100px] shrink-0"
        />
      </div>
      <h5 className="m-0 text-h5" style={{ color: "var(--card)" }}>{title}</h5>
      <p
        className="m-0"
        style={{
          color: "var(--card)",
          fontSize: "var(--text-body)",
          fontFamily: "var(--font-text)",
          lineHeight: "125%",
          letterSpacing: "-0.005em",
        }}
      >
        {text}
      </p>
    </div>
  );
}

export function AboutPage() {
  return (
    <main className="case-study min-h-screen overflow-x-hidden antialiased">
      <SiteTopNav />
      <div className="case-page-shell page-shell pb-12 flex flex-col gap-13">

        {/* ── Hi! intro ── */}
        <div className="grid grid-cols-1 gap-07 pt-11 md:grid-cols-12 md:gap-x-03 md:gap-y-07">
          {/* Headline */}
          <div className="md:col-span-6 flex flex-col gap-07">
            <h1 className="text-h1 m-0 text-foreground">Hey! I'm Barbora</h1>
            <p className="about-hero__sub text-h3 m-0" style={{ color: "var(--muted-foreground)" }}>A UX/UI Designer with experience crafting intuitive interfaces that solve complex business challenges and make people's lives easier. Skilled in prototyping, with a strong focus on accessibility and user engagement.</p>
          </div>

          {/* Slideshow — right col, spans headline + buttons rows on desktop */}
          <div className="about-hero__slideshow md:col-start-7 md:col-span-6 md:row-span-2 flex justify-center">
            <div className="about-hero__photo-inner">
              <PhotoSlideshow />
            </div>
          </div>

          {/* Buttons */}
          <div className="md:col-span-6 flex flex-col gap-03">
            <Button variant="arrow" href="https://www.linkedin.com/in/barboragadlinova/">LinkedIn</Button>
            <CopyEmailButton />
            <Button variant="arrow" href="https://drive.google.com/file/d/1LpCfCp_pGDMXybvYA6mNpW9bz-8PGaUR/view?usp=sharing">View Resume</Button>
          </div>
        </div>

        {/* ── Education & Training ── */}
        <EditorialList
          label="Education & Training"
          items={education.map((item) => ({ title: item.title, sub: item.institution }))}
        />

        {/* ── Experience ── */}
        <EditorialList
          label="Experience"
          items={experience.map((item) => ({ title: item.title, sub: item.meta }))}
        />

        {/* ── Services ── */}
        <div className="flex flex-col gap-06">
          <h3 className="text-h2 m-0 text-foreground">Services</h3>
          <div className="case-interview-callouts__row case-interview-callouts__row--3">
            {services.map((item) => (
              <ServiceCard key={item.key} icon={item.icon} title={item.title} text={item.text} />
            ))}
          </div>
        </div>


      </div>
    </main>
  );
}
