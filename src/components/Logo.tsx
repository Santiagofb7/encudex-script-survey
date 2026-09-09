import logoAsset from "@/assets/logo.jpg.asset.json";
import isotipoAsset from "@/assets/isotipo.jpg.asset.json";

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

export function Isotipo({ className = "h-10" }: { className?: string }) {
  return (
    <img
      src={isotipoAsset.url}
      alt="Isotipo de Encudex"
      className={`${className} w-auto`}
      loading="lazy"
    />
  );
}

export { logoAsset, isotipoAsset };
