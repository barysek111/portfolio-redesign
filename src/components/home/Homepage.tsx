import { lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const SplineViewer = lazy(() => import("@splinetool/react-spline"));
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { SiteTopNav } from "@/components/nav/SiteTopNav";
import { HowIWork } from "@/components/shared/HowIWork";
import { Button } from "@/components/ui/Button";

export default function Homepage() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [40, 260], [0, 1]);
  const scrollBtnOpacity = useTransform(scrollY, [0, 120], [1, 0]);

  return (
    <main className="case-study case-study--home min-h-screen overflow-x-hidden antialiased">
      <SiteTopNav />
      <section id="about" className="home-about-shell page-shell">
        <HomeHero />
      </section>
      <motion.div
        id="case-studies"
        className="case-page-shell page-shell pb-14"
        style={{ opacity }}
      >
        <ProjectShowcase footer={<HowIWork />} />
      </motion.div>
      <motion.div
        className="fixed bottom-0 inset-x-0 py-03 md:py-07 z-40 pointer-events-none"
        style={{ opacity: scrollBtnOpacity }}
      >
        <div className="page-shell pointer-events-none">
          <Button
            variant="scroll"
            type="button"
            onClick={() => document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full pointer-events-auto"
          >
            Case Studies
          </Button>
        </div>
      </motion.div>
    </main>
  );
}

function HomeHero() {
  return (
    <div className="home-hero">
      <SplineScene />
      <HeroIntro />
    </div>
  );
}

function SplineScene() {
  return (
    <div className="spline-frame">
      <Suspense fallback={<div className="w-full h-full" />}>
        <SplineViewer
          scene="/scene.splinecode"
          onLoad={(app) => app.setSize(800, 800)}
          style={{ width: "100%", height: "100%" }}
        />
      </Suspense>
    </div>
  );
}

function HeroIntro() {
  return (
    <h1 className="hero-intro">
      <span className="hero-intro-emphasis">Barbora</span>
      <span className="hero-intro-muted"> Gadlinova is a product </span>
      <span className="hero-intro-emphasis">designer</span>
      <span className="hero-intro-muted"> crafting intuitive digital interfaces for the </span>
      <span className="hero-intro-emphasis">future</span>
      <span className="hero-intro-muted">
        {" "}
        of tech and lifestyle, with a focus on accessibility and user engagement.
      </span>
    </h1>
  );
}
