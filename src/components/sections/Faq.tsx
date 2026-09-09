import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Faq() {
  return (
    <section id="preguntas" className="border-b border-hairline py-20 sm:py-24">
      <div className="container-encudex grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <Reveal>
          <h2 className="tracking-tightish text-[28px] font-semibold text-navy sm:text-[34px]">
            {faq.titulo}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <Accordion type="single" collapsible className="w-full border-t border-hairline">
            {faq.items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-hairline">
                <AccordionTrigger className="py-5 text-left font-display text-[17px] font-semibold text-navy hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="measure pb-5 text-[16px] text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
