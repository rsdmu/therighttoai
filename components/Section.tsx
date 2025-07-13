'use client';

import { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
  fullWidth = false,
}: {
  id?: string;
  title: string;
  children: ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <section
      id={id}
      className={`mx-auto px-4 py-20 ${fullWidth ? '' : 'max-w-3xl'}`}
    >
      <h2 className="mb-8 text-3xl font-semibold tracking-wide">{title}</h2>
      <div className="space-y-6 text-base leading-relaxed">{children}</div>
    </section>
  );
}

export default Section;
