import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { SiteFooter } from "@/components/sections/SiteFooter";

const descripcion =
  "Cuéntenos qué necesita levantar: tipo de estudio, instrumento y tamaño de muestra. Le respondemos en menos de 24 horas hábiles.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Agendar demostración — Encudex" },
      { name: "description", content: descripcion },
      { property: "og:title", content: "Agendar demostración — Encudex" },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Contacto,
});

function Contacto() {
  return (
    <>
      <SiteHeader anchors={false} />
      <main className="pt-[68px]">
        <div className="container-encudex pt-16">
          <h1 className="tracking-tightish text-[30px] font-bold text-navy sm:text-[40px]">
            Agendar demostración
          </h1>
        </div>
        <ContactSection conFondoNavy={false} />
      </main>
      <SiteFooter anchors={false} />
    </>
  );
}
