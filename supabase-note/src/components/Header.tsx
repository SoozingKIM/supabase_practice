'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-green-500 py-3 px-4">
      <Image
        width={100}
        height={100}
        src="/supanote-logo.png"
        alt="Supanote Logo"
        className="h-7"
      />
    </header>
  );
}
