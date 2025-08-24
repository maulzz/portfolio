// src/components/AboutSection.tsx

import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 ">
      <div className="container mx-auto px-8 sm:px-20">
        <div className="bg-gray-100 dark:bg-neutral-800/40 py-10 rounded-xl shadow-2xl">
          <h2 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
            Tentang Saya
          </h2>

          <p className="mx-auto max-w-3xl text-center text-lg text-neutral-600 dark:text-neutral-400">
            Saya adalah seorang mahasiswa Teknologi Informasi Universitas Tidar. Saya lahir dan tinggal di Magelang. Saya memiliki minat yang besar dalam pengembangan perangkat lunak dan teknologi web.
            Fokus utama saya adalah pada pengembangan back-end, namun saya juga memiliki pengalaman dalam pengembangan front-end. Dengan keterampilan yang saya miliki, saya berkomitmen untuk terus belajar dan berkembang di bidang ini,
            terutama untuk membuat sebuah sistem yang relevan dan bermanfaat bagi pengguna.
          </p>
        </div>
      </div>
    </section>
  );
}
