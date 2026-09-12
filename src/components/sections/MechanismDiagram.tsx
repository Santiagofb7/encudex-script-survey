import { AudioLines, Check, FileAudio, Lock, MessagesSquare } from "lucide-react";

export function MechanismDiagram() {
  return (
    <figure className="overflow-hidden rounded-md border border-hairline bg-card">
      <figcaption className="border-b border-hairline px-5 py-5 sm:px-6">
        <span className="eyebrow text-sage">Arquitectura de habla</span>
        <h3 className="mt-2 text-[21px] font-semibold text-navy">Qué está fijo y qué puede conversar</h3>
        <p className="mt-2 max-w-[56ch] text-[14px] leading-relaxed text-muted-foreground">
          El agente combina audios aprobados con conversación en vivo, sin mezclar sus funciones.
        </p>
      </figcaption>

      <div className="relative px-5 py-2 sm:px-6">
        <div className="absolute bottom-10 left-[43px] top-10 w-px bg-hairline sm:left-[47px]" aria-hidden="true" />

        <div className="relative grid gap-4 border-b border-hairline py-6 sm:grid-cols-[56px_1fr]">
          <div className="relative z-10 flex size-11 items-center justify-center rounded-md border border-navy/20 bg-bone text-navy">
            <FileAudio className="size-5" aria-hidden="true" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow text-navy">1 · Reactivo</span>
              <span className="rounded-sm border border-navy/20 bg-navy/[0.05] px-2 py-1 text-[11px] font-semibold text-navy">
                SIEMPRE IGUAL
              </span>
            </div>
            <h4 className="mt-2 text-[18px] font-semibold text-navy">La pregunta no cambia</h4>
            <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
              Sale de un audio aprobado. El agente solo pide el archivo por su identificador; no
              puede redactarlo ni reformularlo.
            </p>
            <div className="mt-4 flex items-center gap-3 rounded-md border border-navy/20 bg-bone px-3 py-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-navy text-navy-foreground">
                <Lock className="size-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[12px] font-medium text-navy">R-014.wav</p>
                <p className="mt-0.5 text-[12px] text-muted-foreground">Audio aprobado antes del campo</p>
              </div>
              <AudioLines className="ml-auto size-5 shrink-0 text-navy" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="relative grid gap-4 border-b border-hairline py-6 sm:grid-cols-[56px_1fr]">
          <div className="relative z-10 flex size-11 items-center justify-center rounded-md border border-navy/20 bg-card text-navy">
            <AudioLines className="size-5" aria-hidden="true" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow text-navy">2 · Repertorio</span>
              <span className="rounded-sm border border-navy/20 bg-navy/[0.05] px-2 py-1 text-[11px] font-semibold text-navy">
                PREPARADO ANTES
              </span>
            </div>
            <h4 className="mt-2 text-[18px] font-semibold text-navy">Las frases habituales ya están listas</h4>
            <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
              Aperturas, transiciones, sondeos y cierres también se graban y aprueban antes de llamar.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-[12px] text-navy sm:grid-cols-4">
              {["Apertura", "Transición", "Sondeo", "Cierre"].map((label) => (
                <span key={label} className="flex items-center gap-1.5 rounded-sm border border-hairline bg-bone px-2 py-2">
                  <Check className="size-3.5 shrink-0 text-sage" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative grid gap-4 py-6 sm:grid-cols-[56px_1fr]">
          <div className="relative z-10 flex size-11 items-center justify-center rounded-md border border-sage bg-sage/10 text-navy">
            <MessagesSquare className="size-5" aria-hidden="true" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow text-navy">3 · Conversación</span>
              <span className="rounded-sm border border-sage bg-sage/10 px-2 py-1 text-[11px] font-semibold text-navy">
                EN VIVO
              </span>
            </div>
            <h4 className="mt-2 text-[18px] font-semibold text-navy">Responde a lo que nadie anticipó</h4>
            <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
              El respondente habla con naturalidad; no necesita teclear nada. El agente escucha,
              registra el audio y marca la respuesta que corresponde. Si no entiende, pide amablemente
              que se repita.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <div className="rounded-md border border-sage bg-sage/10 px-3 py-3">
                <p className="text-[12px] font-semibold text-navy">Sí puede</p>
                <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">Conversar, aclarar, escuchar y codificar la respuesta.</p>
              </div>
              <div className="rounded-md border border-navy/20 bg-bone px-3 py-3">
                <p className="text-[12px] font-semibold text-navy">No puede</p>
                <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">Cambiar la pregunta, sugerir una respuesta ni pedir dígitos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-hairline bg-navy px-5 py-5 sm:px-6">
        <div className="flex gap-3">
          <Lock className="mt-0.5 size-5 shrink-0 text-sage" aria-hidden="true" />
          <p className="text-[14px] leading-relaxed text-navy-foreground">
            <strong>En resumen:</strong> la conversación se adapta; la pregunta aprobada permanece intacta.
          </p>
        </div>
      </div>
    </figure>
  );
}
