import { ArrowRight } from "lucide-react";
import { hero } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Isotipo } from "@/components/Logo";

export function Hero() {
  return (
    <section className="flex items-center border-b border-hairline pt-[150px] pb-10 sm:pt-[176px] sm:pb-12">
      <div className="container-encudex-wide">
        <Reveal>
          <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(440px,0.95fr)] lg:gap-14">
            <div>
              <h1 className="tracking-tightish max-w-[20ch] text-[34px] font-bold leading-[1.1] text-navy sm:text-[44px] lg:text-[52px]">
                {hero.titulo}
              </h1>
              <p className="measure mt-5 text-[18px] leading-relaxed text-muted-foreground sm:text-[20px]">
                {hero.subtitulo}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                <a
                  href="#contacto"
                  className="inline-flex min-h-12 items-center rounded-md bg-navy px-7 py-3 text-base font-medium text-navy-foreground transition-colors duration-150 hover:bg-navy/90 sm:min-h-14 sm:px-8 sm:py-3.5 sm:text-lg"
                >
                  {hero.ctaPrimario}
                </a>
                <a
                  href="#como-funciona"
                  className="group inline-flex min-h-12 items-center gap-2 text-base font-medium text-navy transition-colors duration-150 hover:text-navy/70 sm:text-lg"
                >
                  {hero.ctaSecundario}
                  <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 sm:size-5" />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <Isotipo
                className="h-auto w-full max-w-[320px] sm:max-w-[440px] lg:max-h-[480px] lg:max-w-[560px]"
                loading="eager"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
