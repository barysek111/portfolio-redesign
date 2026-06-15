import { lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const SplineViewer = lazy(() => import("@splinetool/react-spline"));
import { ProjectShowcase } from "@/components/home/ProjectShowcase";
import { SiteTopNav } from "@/components/nav/SiteTopNav";
import { HowIWork } from "@/components/shared/HowIWork";

export default function Homepage() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [40, 260], [0, 1]);

  return (
    <main className="case-study case-study--home min-h-screen overflow-x-hidden antialiased">
      <SiteTopNav />
      <section id="about" className="page-shell min-h-screen flex items-center justify-center">
        <HomeHero />
      </section>
      <motion.div
        className="case-page-shell page-shell pb-12"
        style={{ opacity }}
      >
        <HowIWork />
        <ProjectShowcase />
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
      <Suspense fallback={null}>
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
    <h2 className="hero-intro">
      <span className="hero-intro-emphasis">Barbora</span>
      <span className="hero-intro-muted"> Gadlinova is a product </span>
      <span className="hero-intro-emphasis">designer</span>
      <span className="hero-intro-muted"> crafting intuitive digital interfaces for the </span>
      <span className="hero-intro-emphasis">future</span>
      <span className="hero-intro-muted">
        {" "}
        of tech and lifestyle, with a focus on accessibility and user engagement.
      </span>
    </h2>
  );
}
