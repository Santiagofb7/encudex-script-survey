import logoAsset from "@/assets/logo-new.png.asset.json";
import isotipoAsset from "@/assets/isotipo-final.png.asset.json";

export function Logotipo({ className = "h-7" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Encudex, encuestas telefónicas con agente de inteligencia artificial"
      className={`${className} w-auto mix-blend-multiply`}
      loading="eager"
    />
  );
}

export function Isotipo({ className = "h-10", loading = "lazy" }: { className?: string; loading?: "eager" | "lazy" }) {
  return (
    <img
      src={isotipoAsset.url}
      alt="Isotipo de Encudex"
      className={`${className} w-auto`}
      loading={loading}
    />
  );
}

export { logoAsset, isotipoAsset };
