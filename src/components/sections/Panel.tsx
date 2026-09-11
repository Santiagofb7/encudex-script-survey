import { CircleAlert, Check } from "lucide-react";
import { panel } from "@/content/site";
import { Reveal } from "@/components/Reveal";

const cuotas = [
  { celda: "Norte · 18-29", pct: 92, estado: "bg-sage" },
  { celda: "Norte · 30-49", pct: 64, estado: "bg-sage/70" },
  { celda: "Centro · 18-29", pct: 38, estado: "bg-navy-foreground/35" },
  { celda: "Sur · 50+", pct: 81, estado: "bg-sage" },
];

const avance = [8, 14, 19, 23, 31, 36, 44, 51, 58, 61, 69, 74];

function PanelMockup() {
  return (
    <figure className="rounded-md border border-navy/60 bg-navy p-5 text-navy-foreground shadow-[0_18px_50px_-24px_rgba(22,36,76,0.55)] sm:p-6">
      <figcaption className="mb-5 flex items-center justify-between gap-3 border-b border-navy-foreground/15 pb-4">
        <span className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-sage" />
          </span>
          <span className="eyebrow text-navy-foreground/70">Panel del estudio</span>
        </span>
        <span className="rounded-sm border border-navy-foreground/20 px-2 py-0.5 font-mono text-[11px] text-navy-foreground/60">
          datos de ejemplo
        </span>
      </figcaption>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { k: "Completas", v: "742" },
          { k: "Meta", v: "1,000" },
          { k: "Tasa de contacto", v: "31%" },
          { k: "Cierre proyectado", v: "12 abr" },
        ].map((m) => (
          <div key={m.k} className="rounded-md border border-navy-foreground/15 bg-navy-foreground/[0.04] p-3">
            <p className="text-[11px] tracking-wide text-navy-foreground/55 uppercase">{m.k}</p>
            <p className="mt-1 font-mono text-[20px] text-navy-foreground">{m.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className="eyebrow text-navy-foreground/55">Cuotas por celda</p>
        <ul className="mt-3 space-y-2.5">
          {cuotas.map((c) => (
            <li key={c.celda} className="flex items-center gap-3">
              <span className="w-32 shrink-0 font-mono text-[11px] text-navy-foreground/60">
                {c.celda}
              </span>
              <span className="h-2 flex-1 rounded-sm bg-navy-foreground/10">
                <span
                  className={`block h-full rounded-sm ${c.estado}`}
                  style={{ width: `${c.pct}%` }}
                />
              </span>
              <span className="w-10 text-right font-mono text-[11px] text-navy-foreground">{c.pct}%</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <p className="eyebrow text-navy-foreground/55">Avance diario</p>
        <div className="mt-3 flex h-20 items-end gap-1.5" aria-hidden="true">
          {avance.map((h, i) => (
            <span
              key={i}
              style={{ height: `${(h / 74) * 100}%` }}
              className="w-full rounded-[1px] bg-sage/80"
            />
          ))}
        </div>
      </div>
    </figure>
  );
}

export function Panel() {
  return (
    <section id="panel" className="border-b border-hairline bg-card py-20 sm:py-24">
      <div className="container-encudex grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow text-sage">Lo que ve el cliente</p>
          <h2 className="tracking-tightish mt-3 max-w-[20ch] text-[28px] font-semibold text-navy sm:text-[34px]">
            {panel.titulo}
          </h2>
          <ul className="mt-8 space-y-4">
            {panel.items.map((t) => (
              <li key={t} className="flex gap-3">
                <Check className="mt-1 size-4 shrink-0 text-sage" strokeWidth={2} aria-hidden="true" />
                <span className="measure text-[16px] text-muted-foreground">{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-3 rounded-md border border-navy/25 bg-bone px-4 py-3.5 font-medium text-navy">
            <CircleAlert className="size-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
            {panel.destacado}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <PanelMockup />
        </Reveal>
      </div>
    </section>
  );
}
