import {
  AudioLines,
  BadgeCheck,
  FileCheck2,
  Headphones,
  ListChecks,
  MessageSquareText,
  PhoneCall,
} from "lucide-react";
import { evidencia } from "@/content/site";
import { Reveal } from "@/components/Reveal";

const iconos = [FileCheck2, Headphones, MessageSquareText, AudioLines, PhoneCall, BadgeCheck];
const pasos = ["Guion", "Audio", "Respuesta", "Reproducción", "Intento", "Revisión"];

export function Evidence() {
  return (
    <section id="evidencia" className="border-b border-hairline py-20 sm:py-24">
      <div className="container-encudex">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-sage">Lo que puede revisar</p>
          <h2 className="tracking-tightish mt-3 text-[28px] font-semibold text-navy sm:text-[36px]">
            {evidencia.titulo}
          </h2>
          <p className="measure mt-4 text-[17px] text-muted-foreground sm:text-[18px]">
            {evidencia.intro}
          </p>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-lg border border-hairline bg-card">
          <div className="flex items-center gap-4 border-b border-hairline bg-navy px-5 py-4 text-navy-foreground sm:px-7">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-sage text-navy">
              <PhoneCall className="size-5" strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div>
              <p className="text-[15px] font-semibold">Una entrevista terminada</p>
              <p className="text-[13px] text-navy-muted">Deja seis comprobantes fáciles de revisar</p>
            </div>
          </div>

          <ul className="grid md:grid-cols-2">
          {evidencia.items.map((item, i) => {
            const Icono = iconos[i] ?? FileCheck2;
            return (
              <Reveal
                as="li"
                key={item.titulo}
                delay={(i % 2) * 60}
                className="border-b border-hairline p-5 last:border-b-0 md:border-r md:p-7 md:nth-[2n]:border-r-0 md:nth-last-[-n+2]:border-b-0"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-secondary text-navy">
                    <Icono className="size-5" strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] font-medium uppercase text-sage">{pasos[i]}</p>
                    <h3 className="mt-1 text-[17px] font-semibold text-navy">{item.titulo}</h3>
                    <p className="mt-2 text-[15px] leading-6 text-muted-foreground">{item.texto}</p>
                    <p className="mt-3 flex items-center gap-2 text-[13px] font-medium text-navy">
                      <BadgeCheck className="size-4 shrink-0 text-ok" aria-hidden="true" />
                      {item.detalle}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
          </ul>

          <Reveal className="flex items-start gap-3 bg-secondary px-5 py-5 sm:px-7">
            <BadgeCheck className="mt-0.5 size-5 shrink-0 text-ok" strokeWidth={2} aria-hidden="true" />
            <p className="max-w-4xl text-[15px] font-medium leading-6 text-navy">{evidencia.cierre}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
