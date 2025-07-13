
import Hero from "@/components/Hero";
import { Section } from "@/components/Section";
import EndorseForm from "@/components/EndorseForm";

export default function Home() {
  return (
    <>
      <Hero />

      <Section id="endorse" title="Co-sign the Right to AI">
        <p>
          Individuals and entities who wish to co-sign in support of the values
          and ideas it represents are invited to submit their contact
          information below.
        </p>
        <EndorseForm />
      </Section>

      <section id="poster" className="w-screen overflow-hidden">
        <img
          src="/poster.png"
          alt="Right to AI – explanatory poster"
          className="w-full h-auto"
        />
      </section>
    


      <Section id="declaration" title="Declaration of the Right to AI">
        <p>
          AI shapes daily life—healthcare, finance, education, urban spaces—and
          everyone should have a real voice in how these systems are built, used,
          and governed. The Right to AI affirms that decisions about AI cannot be
          left to a small group of experts or corporations. People and
          communities must help define priorities, share in the oversight of data
          and technology, and ensure that AI reflects democratic values, social
          justice, and collective benefit. This declaration is open for any
          person or organization to endorse. By signing, you affirm that
          everyone—not only tech giants—has a stake in shaping AI that impacts
          daily life. Please click on
          <a href="#endorse" className="text-accent font-medium">Get involved</a>
          &nbsp;to add your voice.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/2501.17899v2.pdf"
            className="inline-block rounded border border-foreground px-6 py-2 text-foreground"
          >
            Paper
          </a>
          <a
            href="https://icml.cc/virtual/2025/poster/40155"
            className="inline-block rounded border border-foreground px-6 py-2 text-foreground"
          >
            Short Talk
          </a>
          <a
            href="/book"
            className="inline-block rounded border border-foreground px-6 py-2 text-foreground"
          >
            Book - Coming Soon
          </a>
        </div>

        <p className="mt-8 text-xs font-semibold text-gray-400">
          Names for the Right to AI
        </p>
        <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-y-1 text-xs text-gray-400">
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