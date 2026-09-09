import { X } from "lucide-react";
import { cobro } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Pricing() {
  return (
    <section id="cobro" className="border-b border-hairline py-20 sm:py-24">
      <div className="container-encudex grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow text-sage">Cómo se cobra</p>
          <h2 className="tracking-tightish mt-3 text-[28px] font-semibold text-navy sm:text-[34px]">
            {cobro.titulo}
          </h2>
          <p className="measure mt-6 text-[17px] text-muted-foreground">{cobro.intro}</p>
          <p className="measure mt-6 font-display text-[18px] font-semibold text-navy">
            {cobro.cierre}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="rounded-md border border-hairline bg-card p-6">
            <h3 className="eyebrow text-muted-foreground">{cobro.subtitulo}</h3>
            <ul className="mt-4 divide-y divide-border">
              {cobro.noSeCobra.map((t) => (
                <li key={t} className="flex items-start gap-3 py-3 text-[16px] text-muted-foreground">
                  <X className="mt-1 size-4 shrink-0 text-navy/40" strokeWidth={2} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
