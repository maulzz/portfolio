// src/components/HeroSection.tsx

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaLinkedin,FaGithub } from "react-icons/fa";

const SocialIcon = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-neutral-600 transition-colors hover:text-orange-500 dark:text-neutral-400 dark:hover:text-orange-500 hover:scale-120 duration-300"
  >
    {children}
  </a>
);

export default function HeroSection() {
  return (
    <section id="hero" className="container mx-auto flex min-h-screen items-center px-8 sm:px-20">
      <div className="flex w-full flex-col-reverse items-center gap-12 md:flex-row">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold md:text-6xl">
            Hi, i'm
            <span className="text-orange-500"> Wildan Maulana</span> Junior
            Developer
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Saya adalah seorang junior developer dan mahasiswa Teknologi
            Informasi yang bersemangat dalam membangun solusi digital yang
            fungsional dan menarik secara visual.
          </p>

          <div className="mt-8 flex justify-center gap-4 md:justify-start">
            <Link href="#">
              <button className="bg-orange-500 px-6 py-3 font-bold text-white transition-colors hover:bg-orange-600 rounded-lg">
                Download CV
              </button>
            </Link>
          </div>

          <div className="mt-8 flex justify-center gap-6 md:justify-start">
            <SocialIcon href="https://instagram.com/maulzz_studev">
              <FaInstagram size={28} />
            </SocialIcon>
            <SocialIcon href="https://wa.me/6285974905465">
              <FaWhatsapp size={28} />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/username">
              <FaLinkedin size={28} />
            </SocialIcon>
            <SocialIcon href="https://github.com/maulzz">
              <FaGithub size={28} />
            </SocialIcon>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="relative">
            <Image
              src="/images/foto1.svg"
              alt="Foto profil saya"
              width={400}
              height={400}
              className="h-64 w-64 rounded-full border-8 border-orange-500 object-cover md:h-96 md:w-96 shadow-2xl shadow-orange-400 dark:shadow-orange-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
