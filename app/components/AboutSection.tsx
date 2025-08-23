// src/components/AboutSection.tsx

import React from 'react';

export default function AboutSection() {
  return (
    // Section wrapper dengan padding vertikal
    <section id="about" className="py-24">
      {/* Container untuk memusatkan konten */}
      <div className="container mx-auto px-4">
        {/* Judul Seksi */}
        <h2 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
          Tentang Saya
        </h2>

        {/* Paragraf Cerita */}
        <p 
          className="mx-auto max-w-3xl text-center text-lg text-neutral-600 dark:text-neutral-400"
        >
          {/* GANTI DENGAN CERITAMU SENDIRI */}
          Saya adalah seorang Web Developer yang bersemangat dalam mengubah ide-ide kreatif menjadi aplikasi web yang fungsional dan menarik secara visual. Dengan fokus utama pada ekosistem JavaScript, khususnya React dan Next.js, saya menikmati setiap proses dalam memecahkan masalah dan membangun antarmuka pengguna yang intuitif. Saat ini, saya terus memperluas pengetahuan saya ke ranah back-end untuk menjadi developer yang lebih komprehensif.
        </p>
      </div>
      {/* Di sini nanti kita akan menambahkan bagian "Skills & Teknologi" */}
    </section>
  );
}