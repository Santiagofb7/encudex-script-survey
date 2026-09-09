import { posicionamiento } from "@/content/site";

export function Positioning() {
  return (
    <section className="bg-navy py-12 sm:py-14">
      <div className="container-encudex">
        <p className="max-w-[70ch] font-display text-[19px] leading-relaxed font-medium text-navy-foreground sm:text-[22px]">
          {posicionamiento}
        </p>
      </div>
    </section>
  );
}
