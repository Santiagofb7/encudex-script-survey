import { FileDiff, AudioLines, ListChecks, Activity, PhoneCall, Scale } from "lucide-react";
import { evidencia } from "@/content/site";
import { Reveal } from "@/components/Reveal";

const iconos = [FileDiff, AudioLines, ListChecks, Activity, PhoneCall, Scale];

export function Evidence() {
  return (
    <section id="evidencia" className="border-b border-hairline py-20 sm:py-24">
      <div className="container-encudex">
        <Reveal>
          <p className="eyebrow text-sage">Evidencia</p>
          <h2 className="tracking-tightish mt-3 text-[28px] font-semibold text-navy sm:text-[34px]">
            {evidencia.titulo}
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-x-10 gap-y-9 md:grid-cols-2">
          {evidencia.items.map((item, i) => {
            const Icono = iconos[i];
            return (
              <Reveal as="li" key={item.titulo} delay={(i % 2) * 60}>
                <div className="flex gap-4">
                  <Icono className="mt-1 size-5 shrink-0 text-sage" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <h3 className="text-[17px] font-semibold text-navy">{item.titulo}</h3>
                    <p className="measure mt-1.5 text-[16px] text-muted-foreground">{item.texto}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
