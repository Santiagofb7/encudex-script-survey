import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logotipo } from "@/components/Logo";
import { nav } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader({ anchors = true }: { anchors?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = (h: string) => (anchors ? h : `/${h}`);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled ? "border-b border-hairline bg-bone/95 backdrop-blur" : "border-b border-transparent",
      )}
    >
      <div className="container-encudex-wide flex h-[128px] items-center justify-between gap-6 sm:h-[152px]">
        <Link to="/" className="shrink-0" aria-label="Encudex, ir al inicio">
          <Logotipo className="h-[104px] sm:h-[124px]" />
        </Link>

        <nav className="hidden items-center gap-10 lg:gap-12 md:flex" aria-label="Secciones del sitio">
          {nav.map((item) => (
            <a
              key={item.href}
              href={href(item.href)}
              className="text-base text-muted-foreground transition-colors duration-150 hover:text-navy lg:text-lg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={href("#contacto")}
            className="hidden min-h-12 items-center rounded-md bg-navy px-5 py-2.5 text-[15px] font-medium text-navy-foreground transition-colors duration-150 hover:bg-navy/90 sm:inline-flex sm:min-h-14 sm:px-6 sm:py-3.5 sm:text-base"
          >
            Agendar demostración
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="inline-flex size-11 items-center justify-center rounded-md text-navy md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hairline bg-bone md:hidden">
          <nav className="container-encudex flex flex-col py-2" aria-label="Secciones del sitio">
            {nav.map((item) => (
              <a
                key={item.href}
                href={href(item.href)}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-3 text-[15px] text-navy last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={href("#contacto")}
              onClick={() => setOpen(false)}
              className="my-3 rounded-md bg-navy px-4 py-3 text-center text-[15px] font-medium text-navy-foreground"
            >
              Agendar demostración
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
