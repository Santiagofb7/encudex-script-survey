import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logotipo } from "@/components/Logo";
import { nav } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
        <Link to="/" className="min-w-0" aria-label="Encudex, ir al inicio">
          <Logotipo className="h-[104px] max-w-full object-contain sm:h-[124px]" />
        </Link>

        <nav className="hidden shrink-0 items-center gap-12 xl:flex 2xl:gap-16" aria-label="Secciones del sitio">
          {nav.map((item) => (
            <a
              key={item.href}
              href={href(item.href)}
              className="shrink-0 whitespace-nowrap text-[15px] leading-normal text-muted-foreground transition-colors duration-150 hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={href("#contacto")}
            className="hidden min-h-14 shrink-0 items-center whitespace-nowrap rounded-md bg-navy px-6 py-3.5 text-base font-medium text-navy-foreground transition-colors duration-150 hover:bg-navy/90 md:inline-flex"
          >
            Agendar demostración
          </a>
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-md text-navy xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hairline bg-bone xl:hidden">
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
