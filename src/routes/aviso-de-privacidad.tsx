import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { contacto } from "@/content/site";

const descripcion =
  "Aviso de privacidad de Encudex: tratamiento de datos personales conforme a la legislación mexicana vigente.";

export const Route = createFileRoute("/aviso-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Aviso de privacidad — Encudex" },
      { name: "description", content: descripcion },
      { property: "og:title", content: "Aviso de privacidad — Encudex" },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/aviso-de-privacidad" },
    ],
    links: [{ rel: "canonical", href: "/aviso-de-privacidad" }],
  }),
  component: Aviso,
});

function Bloque({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-hairline py-8">
      <h2 className="text-[20px] font-semibold text-navy">{titulo}</h2>
      <div className="measure mt-3 space-y-3 text-[16px] text-muted-foreground">{children}</div>
    </section>
  );
}

function Aviso() {
  return (
    <>
      <SiteHeader anchors={false} />
      <main className="pt-[68px]">
        <div className="container-encudex py-16">
          <h1 className="tracking-tightish text-[30px] font-bold text-navy sm:text-[40px]">
            Aviso de privacidad
          </h1>
          <p className="measure mt-5 text-[17px] text-muted-foreground">
            Encudex trata los datos personales que recibe conforme a la legislación mexicana vigente
            en materia de protección de datos personales.
          </p>

          <Bloque titulo="Responsable">
            <p>
              Encudex es responsable del tratamiento de los datos personales que usted proporciona a
              través de este sitio. Para cualquier asunto relacionado con este aviso puede escribir a{" "}
              <a href={`mailto:${contacto.correo}`} className="text-navy underline">
                {contacto.correo}
              </a>
              .
            </p>
          </Bloque>

          <Bloque titulo="Datos que recabamos en este sitio">
            <p>
              A través del formulario de contacto recabamos nombre, organización, correo corporativo,
              teléfono, tipo de organización, volumen estimado de entrevistas y el mensaje que usted
              escriba.
            </p>
          </Bloque>

          <Bloque titulo="Finalidades">
            <p>
              Los datos se usan para responder su solicitud, agendar una demostración, elaborar una
              cotización y dar seguimiento comercial. No se usan para finalidades distintas sin su
              consentimiento.
            </p>
          </Bloque>

          <Bloque titulo="Datos recabados durante un levantamiento">
            <p>
              En los estudios que Encudex opera para un cliente, el tratamiento de los datos de las
              personas entrevistadas se rige por el contrato del estudio. La identificación del
              agente de inteligencia artificial, el nombre de la casa encuestadora responsable y el
              aviso de grabación se comunican de forma explícita al inicio de cada llamada.
            </p>
            <p>
              Los plazos de conservación se declaran por estudio y la destrucción de los materiales
              queda documentada. No se realiza identificación de hablante ni huella vocal.
            </p>
          </Bloque>

          <Bloque titulo="Transferencias">
            <p>
              No compartimos sus datos con terceros ajenos a la prestación del servicio, salvo cuando
              la ley lo requiera o cuando sea necesario para operar el estudio contratado, en cuyo
              caso los encargados quedan obligados a las mismas condiciones de tratamiento.
            </p>
          </Bloque>

          <Bloque titulo="Derechos de acceso, rectificación, cancelación y oposición">
            <p>
              Usted puede solicitar el acceso, la rectificación, la cancelación o la oposición al
              tratamiento de sus datos personales, así como revocar su consentimiento, escribiendo a{" "}
              <a href={`mailto:${contacto.correo}`} className="text-navy underline">
                {contacto.correo}
              </a>
              . Le pediremos acreditar su identidad antes de atender la solicitud.
            </p>
          </Bloque>

          <Bloque titulo="Cambios a este aviso">
            <p>
              Cualquier modificación a este aviso se publicará en esta misma página. Le sugerimos
              revisarla periódicamente.
            </p>
          </Bloque>
        </div>
      </main>
      <SiteFooter anchors={false} />
    </>
  );
}
