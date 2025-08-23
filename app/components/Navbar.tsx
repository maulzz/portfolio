// src/components/Navbar.tsx

'use client'; 

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
  { href: '', label: 'Tentang Saya' },
  { href: '', label: 'Proyek' },
  { href: '', label: 'Kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 py-4 px-4 sm:px-12 ">
      <div className="container mx-auto flex items-center justify-between rounded-2xl bg-white/70 py-3 px-7 shadow-2xl backdrop-blur-sm dark:bg-gray-800/70">
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-gray-100">
          MaulzzStuDev
        </Link>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 font-semibold transition-colors hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-500"
            >
              {link.label}
            </Link>
          ))}
          <Link href="#contact">
            <button className="rounded-full bg-orange-500 px-4 py-2 font-bold text-white transition-colors hover:bg-orange-600">
              Hubungi Saya
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Bars3Icon className="h-6 w-6 text-gray-900 dark:text-gray-100" />
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-50 bg-black/70  transition-opacity md:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`fixed right-0 top-0 z-50 h-full w-64 transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out dark:bg-neutral-900 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" />
          </button>
        </div>
        <div className="mt-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg text-gray-600 font-semibold transition-colors hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-500"
              onClick={() => setIsOpen(false)} 
            >
              {link.label}
            </Link>
          ))}
          <Link href="#contact">
            <button className="w-full rounded-full bg-orange-500 px-4 py-2 font-bold text-white transition-colors hover:bg-orange-600">
              Hubungi Saya
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}