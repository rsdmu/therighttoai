import Section from '@/components/Section';

export const metadata = {
  title: 'About – The Right to AI',
};

export default function AboutPage() {
  return (
    <Section id="about" title="About">
      <p>
        Since 2022, the Right to AI has grown from a three-year multidisciplinary collaboration among researchers, urban planners, community organizers, and technologists, working with more than 30 community organizations across Montréal. Now established as a non-profit organization, we explore how people can meaningfully participate in the design, deployment, and governance of AI infrastructures that increasingly influence public space, finance, healthcare, and daily life. This declaration is a starting point for workshops, academic papers, and policy conversations that invite others to shape techno-diverse futures based on pluralism, transparency, and shared stewardship of data and algorithms.
      </p>
      <h3 className="mt-10 font-semibold">What We Do</h3>
      <p className="mt-6">
        <strong>Workshops.</strong> We organize community workshops where people
        from diverse backgrounds co-create with and critically reflect on AI
        systems. These sessions raise awareness and build understanding of both
        the benefits and harms of AI.
      </p>
      <p className="mt-4">
        <strong>Research.</strong> We publish studies and open data focused on
        methods for public participation in the design, evaluation, and
        oversight of AI.
      </p>
      <p className="mt-4">
        <strong>Advocacy.</strong> We advocate for the voices often excluded
        from AI policy and design—those most affected by automated systems but
        least consulted in their creation.
      </p>

      <h3 className="mt-10 font-semibold">Our Values</h3>
      <p className="mt-6">
        <strong>Transparency and Open Source.</strong> We release data, code, and
        research findings under open licenses to support collective learning.
      </p>
      <p className="mt-4">
        <strong>Pluralism.</strong> We work with people across cultures,
        languages, and perspectives to shape AI that reflects many ways of life.
      </p>
      <p className="mt-4">
        <strong>Grassroots Engagement.</strong> We focus on building local
        knowledge and participation from the ground up, through workshops,
        partnerships, and direct community work.
      </p>

      <h3 className="mt-10 font-semibold">How You Can Help</h3>
      <ul className="mt-4 list-disc pl-6 space-y-2">
        <li>Become a volunteer and share the Right to AI within your community or field of work</li>
        <li>Join ongoing research projects on public participation in AI</li>
        <li>Get in touch to collaborate on a research project</li>
      </ul>
      <p className="mt-6 text-accent">contact@therighttoai.org</p>
    </Section>
  );
}
