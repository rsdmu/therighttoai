import Image from 'next/image';
import Section from '@/components/Section';

export const metadata = {
  title: 'Poster \u2013 The Right to AI',
  description: 'Download or view the Right to AI informational poster.',
  alternates: { canonical: '/poster' },
};

export default function PosterPage() {
  return (
    <Section id="poster" title="Poster" fullWidth>
      <div className="flex justify-center">
        <Image
          src="/poster.png"
          alt="Right to AI explanatory poster"
          width={1200}
          height={1800}
          className="h-auto w-full border border-gray-200"
        />
      </div>
    </Section>
  );
}
