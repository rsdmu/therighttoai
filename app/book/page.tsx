import Image from 'next/image';
import Section from '@/components/Section';

export const metadata = {
  title: 'Book – The Right to AI',
};

export default function BookPage() {
  return (
    <Section id="book" title="Book">
      <div className="flex flex-col items-center">
        <Image
          src="/book.png"
          alt="Right to AI book cover"
          width={400}
          height={600}
          className="mb-6 h-auto w-auto border border-gray-200"
        />
        <p className="text-lg">Coming soon</p>
      </div>
    </Section>
  );
}
