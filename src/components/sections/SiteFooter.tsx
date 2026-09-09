import { Link } from "@tanstack/react-router";
import { Isotipo } from "@/components/Logo";
import { footer, nav, contacto } from "@/content/site";

export function SiteFooter({ anchors = true }: { anchors?: boolean }) {
  const href = (h: string) => (anchors ? h : `/${h}`);
  const anio = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-bone py-14">
      <div className="container-encudex grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Isotipo className="h-10 mix-blend-multiply" />
          <p className="measure mt-4 text-[15px] text-muted-foreground">{footer.descripcion}</p>
        </div>

        <nav aria-label="Secciones">
          <p className="eyebrow text-navy">Secciones</p>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={href(item.href)}
                  className="text-[15px] text-muted-foreground transition-colors duration-150 hover:text-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow text-navy">Contacto</p>
          <ul className="mt-4 space-y-2.5 text-[15px] text-muted-foreground">
            <li>
              <a
                href={`mailto:${contacto.correo}`}
                className="transition-colors duration-150 hover:text-navy"
              >
                {contacto.correo}
              </a>
            </li>
            <li>
              <Link to="/contacto" className="transition-colors duration-150 hover:text-navy">
                Agendar demostración
              </Link>
            </li>
            <li>
              <Link
                to="/aviso-de-privacidad"
                className="transition-colors duration-150 hover:text-navy"
              >
                Aviso de privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-encudex mt-12 border-t border-hairline pt-6">
        <p className="text-[13px] text-muted-foreground">
          © {anio} Encudex. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
