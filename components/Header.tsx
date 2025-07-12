'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const nav = pathname === '/about'
    ? { href: '/', label: 'Home' }
    : { href: '/about', label: 'About' };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-end px-6 py-4 backdrop-blur-md">
      <nav>
        <Link
          href={nav.href}
          className="text-sm font-medium tracking-wide text-white transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {nav.label}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
