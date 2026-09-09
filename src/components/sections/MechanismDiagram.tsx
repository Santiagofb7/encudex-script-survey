import { Lock } from "lucide-react";

function Lane({
  etiqueta,
  descripcion,
  children,
}: {
  etiqueta: string;
  descripcion: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-hairline py-4 first:border-t-0 first:pt-0">
      <div className="flex items-baseline justify-between gap-4">
        <span className="eyebrow text-navy">{etiqueta}</span>
        <span className="text-[13px] text-muted-foreground">{descripcion}</span>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export function MechanismDiagram() {
  return (
    <figure className="rounded-md border border-hairline bg-card p-5 sm:p-6">
      <figcaption className="mb-5 flex items-center justify-between gap-4 border-b border-hairline pb-4">
        <span className="eyebrow text-muted-foreground">Arquitectura de habla</span>
        <span className="font-mono text-[12px] text-muted-foreground">estudio · ejemplo</span>
      </figcaption>

      <Lane etiqueta="Reactivo" descripcion="archivo fijo, no reformulable">
        <div className="flex flex-wrap items-center gap-3 rounded-md border border-navy/25 bg-navy/[0.04] px-3 py-3">
          <Lock className="size-4 shrink-0 text-navy" aria-hidden="true" />
          <span className="font-mono text-[13px] text-navy">R-014.wav</span>
          <span className="hidden h-4 w-px bg-hairline sm:block" aria-hidden="true" />
          <span className="text-[13px] text-muted-foreground">
            se reproduce por identificador, idéntico en cada entrevista
          </span>
        </div>
        <div className="mt-2 flex h-2 gap-1" aria-hidden="true">
          {Array.from({ length: 28 }).map((_, i) => (
            <span key={i} className="h-full flex-1 rounded-[1px] bg-navy/70" />
          ))}
        </div>
      </Lane>

      <Lane etiqueta="Repertorio" descripcion="pre-grabado y aprobado">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {["A-001 apertura", "T-006 transición", "O-012 objeción", "C-003 cierre"].map((t) => (
            <span
              key={t}
              className="rounded-md border border-hairline px-2 py-2 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </Lane>

      <Lane etiqueta="Conversación" descripcion="habla generada en vivo, con límites verificados">
        <div className="rounded-md border border-dashed border-sage bg-sage/10 px-3 py-3">
          <p className="text-[13px] text-navy">
            Aclaraciones, dudas y rapport. No puede leer las opciones antes de tiempo, sugerir
            respuesta, agregar información ni reformular la pregunta.
          </p>
        </div>
        <div className="mt-2 flex items-end gap-[3px]" aria-hidden="true">
          {[6, 12, 9, 16, 7, 13, 20, 10, 14, 8, 18, 11, 7, 15, 9, 12, 6, 17, 10, 8].map((h, i) => (
            <span key={i} style={{ height: `${h}px` }} className="w-full rounded-[1px] bg-sage" />
          ))}
        </div>
      </Lane>
    </figure>
  );
}
