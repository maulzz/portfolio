// src/components/ContactSection.tsx

"use client";

import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Mengirim....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "977cfeef-b9b5-4e03-83ff-accebe7e2592");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Pesan berhasil terkirim!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      console.log("Error", data);
      setResult("Terjadi kesalahan, silakan coba lagi.");
    }
  };

  return (
    <section id="contact" className="py-24 ">
      <div className="container mx-auto px-8 sm:px-20">
        <h2 className="mb-2 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
          Mari Terhubung
        </h2>
        <p className="mb-16 text-center text-sm text-gray-600 dark:text-gray-400">
          Saya selalu terbuka untuk diskusi mengenai proyek baru, peluang
          kolaborasi, atau sekadar untuk menyapa. Jangan ragu untuk menghubungi
          saya.
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-4 bg-gray-100 shadow-md dark:bg-neutral-800/40 p-4 rounded-lg">
          <h1 className="font-bold text-2xl ">Hubungi dibawah ini</h1>
            <a
              href="mailto:wildanmh515@gmail.com" target="_blank"
              className="flex items-center gap-4 rounded-lg bg-gray-200 p-4 transition-colors hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-gray-700"
            >
              <FaEnvelope className="h-6 w-6 text-orange-500" />
              <span>wildanmh515@gmail.com</span>
            </a>
            
            <a
              href="https://instagram.com/maulzz_studev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg bg-gray-200 p-4 transition-colors hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-gray-700"
            >
              <FaInstagram className="h-6 w-6 text-orange-500" />
              <span>Instagram</span>
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg bg-gray-200 p-4 transition-colors hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-gray-700"
            >
              <FaLinkedin className="h-6 w-6 text-orange-500" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/maulzz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg bg-gray-200 p-4 transition-colors hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-gray-700"
            >
              <FaGithub className="h-6 w-6 text-orange-500" />
              <span>GitHub</span>
            </a>
            <a
              href="https://wa.me/6285974905465"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg bg-gray-200 p-4 transition-colors hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-gray-700"
            >
              <FaWhatsapp className="h-6 w-6 text-orange-500" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div>
            <form onSubmit={onSubmit} className="flex flex-col shadow-md gap-4 bg-gray-100 dark:bg-neutral-800/40 p-4 rounded-lg">
              <div>
                <label htmlFor="name" className="mb-2 block font-semibold">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-orange-500 bg-gray-200 p-3 focus:border-orange-500 focus:ring-orange-500  dark:bg-neutral-800"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-orange-500 bg-gray-200 p-3 focus:border-orange-500 focus:ring-orange-500 dark:bg-neutral-800"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block font-semibold">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-lg border border-orange-500 bg-gray-200 p-3 focus:border-orange-500 focus:ring-orange-500 dark:bg-neutral-800"
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded-lg bg-orange-500 px-6 py-3 font-bold text-white transition-colors hover:bg-orange-600"
              >
                Kirim Pesan
              </button>
              {result && <p className="text-center">{result}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
