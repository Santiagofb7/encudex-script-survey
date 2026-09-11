import { ArrowRight } from "lucide-react";
import { hero } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section className="border-b border-hairline pt-[112px] pb-16 sm:pt-[140px] sm:pb-24">
      <div className="container-encudex">
        <Reveal>
          <h1 className="tracking-tightish max-w-[20ch] text-[34px] font-bold text-navy sm:text-[46px] lg:text-[54px]">
            {hero.titulo}
          </h1>
          <p className="measure mt-6 text-[17px] text-muted-foreground sm:text-[18px]">
            {hero.subtitulo}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#contacto"
              className="inline-flex min-h-11 items-center rounded-md bg-navy px-6 py-3 font-medium text-navy-foreground transition-colors duration-150 hover:bg-navy/90"
            >
              {hero.ctaPrimario}
            </a>
            <a
              href="#como-funciona"
              className="group inline-flex min-h-11 items-center gap-2 font-medium text-navy transition-colors duration-150 hover:text-navy/70"
            >
              {hero.ctaSecundario}
              <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
