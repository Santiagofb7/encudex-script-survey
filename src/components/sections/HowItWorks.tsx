import { comoFunciona } from "@/content/site";
import { MechanismDiagram } from "./MechanismDiagram";
import { Reveal } from "@/components/Reveal";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-b border-hairline bg-card py-20 sm:py-24">
      <div className="container-encudex">
        <Reveal>
          <p className="eyebrow text-sage">Cómo funciona</p>
          <h2 className="tracking-tightish mt-3 max-w-[22ch] text-[28px] font-semibold text-navy sm:text-[34px]">
            {comoFunciona.titulo}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {comoFunciona.registros.map((r, i) => (
            <Reveal key={r.titulo} delay={i * 80}>
              <article className="h-full rounded-md border border-hairline bg-bone p-6">
                <p className="eyebrow text-muted-foreground">{r.etiqueta}</p>
                <h3 className="mt-2 text-[20px] font-semibold text-navy">{r.titulo}</h3>
                <p className="mt-3 text-[16px] text-muted-foreground">{r.texto}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={60}>
          <div className="mt-12 lg:max-w-[720px]">
            <MechanismDiagram />
          </div>
        </Reveal>

        <Reveal>
          <p className="tracking-tightish mt-12 max-w-[58ch] border-l-2 border-sage pl-5 font-display text-[20px] leading-snug font-semibold text-navy sm:text-[24px]">
            {comoFunciona.cierre}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
