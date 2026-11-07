import { Button, Disclosure, Section, SectionHeading } from "@/components/ui";
import { faq } from "@/content/faq";
import { links } from "@/content/site";

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

export function ContactSection() {
  return (
    <Section tone="soft" labelledBy="contact-title">
      <SectionHeading id="contact-title" title="Something else?" lead="For questions, partnerships or sponsorships, email the officers." />
      <Button href={`mailto:${links.email}`} variant="secondary">
        Email {links.email}
      </Button>
    </Section>
  );
}
