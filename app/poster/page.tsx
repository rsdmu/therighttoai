import Image from 'next/image';
import Section from '@/components/Section';

export const metadata = {
  title: 'Poster \u2013 The Right to AI',
};

export default function PosterPage() {
  return (
    <Section id="poster" title="Poster">
      <div className="flex justify-center">
        <Image
          src="/poster.png"
          alt="Right to AI explanatory poster"
          width={800}
          height={1200}
          className="h-auto w-full max-w-3xl border border-gray-200"
        />
      </div>
    </Section>
  );
}
