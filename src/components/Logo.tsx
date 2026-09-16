import logoSrc from "@/assets/logo-removebg.png";
import isotipoSrc from "@/assets/isotipo-final.png";

export function Logotipo({ className = "h-7" }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Encudex, encuestas telefónicas con agente de inteligencia artificial"
      className={`${className} w-auto mix-blend-multiply`}
      loading="eager"
    />
  );
}

export function Isotipo({ className = "h-10", loading = "lazy" }: { className?: string; loading?: "eager" | "lazy" }) {
  return (
    <img
      src={isotipoSrc}
      alt="Isotipo de Encudex"
      className={`${className} w-auto`}
      loading={loading}
    />
  );
}

export { logoSrc as logoAsset, isotipoSrc as isotipoAsset };
