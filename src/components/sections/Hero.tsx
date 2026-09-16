import { ArrowRight } from "lucide-react";
import { hero } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Isotipo } from "@/components/Logo";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100svh-72px)] items-center border-b border-hairline pt-[152px] pb-16 sm:min-h-[calc(100svh-88px)] sm:pt-[184px] sm:pb-24">
      <div className="container-encudex-wide">
        <Reveal>
          <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.92fr)] lg:gap-16">
            <div>
              <h1 className="tracking-tightish max-w-[20ch] text-[30px] font-bold text-navy sm:text-[40px] lg:text-[46px]">
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
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <Isotipo
                className="h-auto w-full max-w-[280px] sm:max-w-[400px] lg:max-h-[520px] lg:max-w-[520px]"
                loading="eager"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
