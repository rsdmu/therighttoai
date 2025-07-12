

import Section from "@/components/Section";

export const metadata = {
  title: "About – The Right to AI",
};

export default function AboutPage() {
  return (
    <Section id="about" title="About the Project">
      <p className="leading-7 text-gray-300 max-w-3xl">
        Over the last three years <strong>The&nbsp;Right&nbsp;to&nbsp;AI</strong> has grown into a
        multidisciplinary collaboration between researchers, urban planners, community organizers,
        and technologists working with more than&nbsp;30 community organisations across
        Montréal. Together, we explore how people can meaningfully participate in the design,
        deployment&nbsp;and governance of the AI infrastructures that increasingly influence public
        space, finance, healthcare, and everyday life. The present declaration is a starting point
        for workshops, academic papers, and policy conversations that invite others to help shape
        techno‑diverse futures built on pluralism, transparency, and shared stewardship of data and
        algorithms.
      </p>

<div className="mt-10 text-sm leading-6 text-gray-400">
  <h3 className="mb-2 font-semibold tracking-wide text-gray-300">Authors</h3>
  <ul className="grid grid-cols-2 gap-x-8 gap-y-1">
    <li>Rashid Mushkani</li>
    <li>Hugo Berard</li>
    <li>Allison Cohen</li>
    <li>Shin Koseki</li>
  </ul>
</div>


    </Section>
  );
}