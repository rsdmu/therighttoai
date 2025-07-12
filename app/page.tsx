
import Hero from "@/components/Hero";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <>
      <Hero />
      
      <section id="poster" className="w-screen overflow-hidden">
        <img
          src="/poster.png"
          alt="Right to AI – explanatory poster"
          className="w-full h-auto"
        />
      </section>
    


      <Section id="declaration" title="Declaration of the Right to AI">
        <p>
          We distilled the manifesto into a concise declaration that any person or organization can endorse. By signing,
          you affirm that everyone—not just tech giants—has a stake in shaping AI that impacts daily life.
        </p>
        <a
          href="/declaration.pdf"
          className="inline-block rounded border border-foreground px-6 py-2 text-foreground"
        >
          Paper
        </a>
      
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-y-1 text-xs text-gray-400">
          <span>Rashid Mushkani</span>
          <span>Hugo Berard</span>
          <span>Allison Cohen</span>
          <span>Shin Koseki</span>
          <span>Khadija Ahmed</span>
          <span>Diego Ramos</span>
          <span>Ava Chen</span>
          <span>Liam O&apos;Connor</span>
          <span>Sara Patel</span>
          <span>Jun Park</span>
          <span>Elena Petrova</span>
          <span>Daniel Smith</span>
          <span>Amira Hassan</span>
          <span>Gabriel Martins</span>
        </div>

      </Section>
      </>
  );
}