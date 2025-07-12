'use client';

import { ReactNode } from "react";

export function Section({
  id,
  title,
  children
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-4 py-20">
      <h2 className="mb-8 text-3xl font-semibold tracking-wide">{title}</h2>
      <div className="space-y-6 text-base leading-relaxed">{children}</div>
    </section>
  );
}

export default Section;
