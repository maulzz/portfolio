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
            Saya adalah seorang Web Developer yang bersemangat dalam mengubah
            ide-ide kreatif menjadi aplikasi web yang fungsional dan menarik
            secara visual. Dengan fokus utama pada ekosistem JavaScript,
            khususnya React dan Next.js, saya menikmati setiap proses dalam
            memecahkan masalah dan membangun antarmuka pengguna yang intuitif.
            Saat ini, saya terus memperluas pengetahuan saya ke ranah back-end
            untuk menjadi developer yang lebih komprehensif.
          </p>
        </div>
      </div>
    </section>
  );
}
