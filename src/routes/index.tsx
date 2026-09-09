import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Evidence } from "@/components/sections/Evidence";
import { Panel } from "@/components/sections/Panel";
import { Pricing } from "@/components/sections/Pricing";
import { Product } from "@/components/sections/Product";
import { Faq } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { SiteFooter } from "@/components/sections/SiteFooter";

const descripcion =
  "Encudex levanta encuestas telefónicas completas con un agente de IA que pregunta igual en la entrevista uno que en la cinco mil, sin entrevistador humano y a una fracción del costo.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Encudex — Encuestas telefónicas levantadas por un agente de IA" },
      { name: "description", content: descripcion },
      { property: "og:title", content: "Encudex — Encuestas telefónicas levantadas por un agente de IA" },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Positioning />
        <Problem />
        <HowItWorks />
        <Evidence />
        <Panel />
        <Pricing />
        <Product />
        <Faq />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
