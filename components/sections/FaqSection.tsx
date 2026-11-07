import { Disclosure, Section, SectionHeading } from "@/components/ui";
import { faq } from "@/content/faq";

export function FaqSection() {
  return (
    <Section labelledBy="faq-title">
      <SectionHeading id="faq-title" title="Questions" />
      <div className="faq-list">
        {faq.map((item, i) => (
          <Disclosure key={item.q} summary={item.q} defaultOpen={i === 0}>
            <p>{item.a}</p>
          </Disclosure>
        ))}
      </div>
    </Section>
  );
}
