import { ArrowRight } from "lucide-react";
import { producto, paraQuien } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Product() {
  return (
    <section id="producto" className="border-b border-hairline bg-card py-20 sm:py-24">
      <div className="container-encudex">
        <Reveal>
          <p className="eyebrow text-sage">Producto</p>
          <h2 className="tracking-tightish mt-3 text-[28px] font-semibold text-navy sm:text-[34px]">
            Dos formas de aplicar el mismo instrumento
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <Reveal>
            <article className="h-full rounded-md border border-navy bg-navy p-7 text-navy-foreground">
              <p className="eyebrow text-sage">{producto.disponible.estado}</p>
              <h3 className="tracking-tightish mt-3 text-[24px] font-semibold">
                {producto.disponible.titulo}
              </h3>
              <p className="measure mt-4 text-[16px] text-navy-muted">{producto.disponible.texto}</p>
              <a
                href="#contacto"
                className="mt-7 inline-flex min-h-11 items-center rounded-md bg-navy-foreground px-5 py-2.5 font-medium text-navy transition-opacity duration-150 hover:opacity-90"
              >
                Agendar demostración
              </a>
            </article>
          </Reveal>

          <Reveal delay={90}>
            <article className="h-full rounded-md border border-dashed border-input bg-bone p-7">
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow text-muted-foreground">{producto.desarrollo.estado}</p>
                <span className="rounded-sm border border-sage bg-sage/15 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-navy uppercase">
                  {producto.desarrollo.badge}
                </span>
              </div>
              <h3 className="tracking-tightish mt-3 text-[22px] font-semibold text-navy">
                {producto.desarrollo.titulo}
              </h3>
              <p className="measure mt-4 text-[16px] text-muted-foreground">
                {producto.desarrollo.texto}
              </p>
              <a
                href="#contacto"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("encudex:prefill", {
                      detail:
                        "Asunto: encuestas por mensajería (WhatsApp). Avísenme cuando esté disponible.",
                    }),
                  )
                }
                className="group mt-7 inline-flex min-h-11 items-center gap-2 font-medium text-navy transition-colors duration-150 hover:text-navy/70"
              >
                {producto.desarrollo.enlace}
                <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </a>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 border-t border-hairline pt-10">
            <h2 className="tracking-tightish text-[22px] font-semibold text-navy">
              {paraQuien.titulo}
            </h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {paraQuien.items.map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-hairline bg-bone px-4 py-2.5 text-[15px] text-navy"
                >
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
