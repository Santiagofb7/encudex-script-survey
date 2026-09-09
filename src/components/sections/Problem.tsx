import { problema } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Problem() {
  return (
    <section id="problema" className="border-b border-hairline py-20 sm:py-24">
      <div className="container-encudex">
        <Reveal>
          <h2 className="tracking-tightish text-[28px] font-semibold text-navy sm:text-[34px]">
            {problema.titulo}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {problema.items.map((item, i) => (
            <Reveal key={item.titulo} delay={i * 80}>
              <div className="border-t border-navy pt-5">
                <h3 className="text-[19px] font-semibold text-navy">{item.titulo}</h3>
                <p className="measure mt-3 text-[16px] text-muted-foreground">{item.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
