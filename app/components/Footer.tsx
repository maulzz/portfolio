// src/components/Footer.tsx

import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaMedium } from 'react-icons/fa';

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transition-colors hover:text-orange-500"
  >
    {icon}
  </a>
);

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 text-sm text-neutral-500 dark:border-gray-700 dark:text-neutral-400">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 md:flex-row md:justify-between">
        <div>
          &copy; {new Date().getFullYear()} Maulzz. All Rights Reserved.
        </div>

        {/* Ikon Sosial Media */}
        <div className="flex gap-4">
          <SocialLink href="https://github.com/maulzz" icon={<FaGithub size={24} />} />
          <SocialLink href="https://linkedin.com/in/maulzz_studev" icon={<FaLinkedin size={24} />} />
          <SocialLink href="https://instagram.com/maulzz" icon={<FaInstagram size={24} />} />
          <SocialLink href="https://wa.me/6285974905465" icon={<FaWhatsapp size={24} />} />
          <SocialLink href="https://medium.com/@wildanmaulana95914" icon={<FaMedium size={24} />} />
        </div>
      </div>
    </footer>
  );
}