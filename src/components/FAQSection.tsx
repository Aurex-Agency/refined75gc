import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What can I use my $75 gift certificate on?",
    answer:
      "Your $75 gift certificate can be applied toward any injectable treatment at Refined Aesthetics, including Botox, dermal fillers, and other aesthetic services. It is redeemable during your first visit as a new patient.",
  },
  {
    question: "What happens during my first consultation?",
    answer:
      "During your complimentary consultation, you'll meet with one of our expert injectors to discuss your aesthetic goals, medical history, and concerns. We'll create a personalized treatment plan tailored to achieve the natural, refreshed look you're seeking — with absolutely no pressure.",
  },
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "That's exactly what your consultation is for. Our injectors will assess your unique facial anatomy and discuss your desired outcomes to recommend the most appropriate treatment. We believe in a thoughtful, individualized approach — never a one-size-fits-all solution.",
  },
  {
    question: "Is there any downtime?",
    answer:
      "Most Botox treatments involve minimal to no downtime. You may experience slight redness or swelling at the injection site, which typically resolves within a few hours. Most patients return to their normal activities immediately after treatment.",
  },
];

const FAQSection = () => (
  <section className="bg-light-grey py-20 px-4">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-3xl md:text-4xl text-primary text-center mb-4">
        Your Questions, Answered.
      </h2>
      <div className="w-16 h-px bg-gold mx-auto mb-10" />

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-background rounded shadow-sm border-none px-6"
          >
            <AccordionTrigger className="text-primary font-heading text-base font-semibold hover:no-underline py-5">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
