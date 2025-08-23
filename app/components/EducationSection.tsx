"use client";

import React from "react";
import Link from "next/link";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const datapendidikan = [
  {
    nama: "SMKN 2 Magelang",
    link: "https://smkn2mgl.sch.id/",
    jurusan: "Pengembangan Perangkat Lunak dan Gim",
    tahun: "2022-2025",
    kota: "Magelang,Jawa Tengah",
    status: "Lulus",
    learnings: [
      "Data Structures & Algorithms",
      "Database Management",
      "Web & Mobile App Development",
      "2D & 3D Game Development",
      "3D Modeling",
      "3D Animation",
      "Software Engineering",
    ],
  },
  {
    nama: "Universitas Tidar",
    jurusan: "S1 Teknologi Informasi",
    link: "https://untidar.ac.id/",
    tahun: "2025-now",
    kota: "Magelang,Jawa Tengah",
    status: "Belum Lulus",
    learnings: ["basic algorithms & programming"],
  },
];

const datapengalaman = [
  {
    nama: "Magang di Jivaloka Digital",
    posisi: "3D Designer",
    tahun: "2023-2024",
    kota: "Mampang, Jakarta Selatan",
    deskripsi:
      "Bekerja sebagai 3D Designer di Jivaloka Digital, berkontribusi dalam pembuatan aset 3D untuk proyek-proyek game.",
    learnings: [
      "Pembuatan Aset 3D",
      "UE5 Basic",
      "Pengembangan 3D model",
      "Kolaborasi Tim",
      "Manajemen Proyek",
    ],
  },
    {
    nama: "Magang di PT teknoreka",
    posisi: "Game Development",
    tahun: "2024-2025",
    kota: "Condong Catur, Seleman",
    deskripsi:
      "Bekerja sebagai Game Developer di PT teknoreka, berkontribusi dalam pengembangan game dan pembuatan aset 3D.",
    learnings: [
      "Unity",
      "C#",
      "2D & 3D Game Development",
      "2D & 3D Design",
      "Manajemen Waktu",
    ],
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-16 bg-gray-100 dark:bg-neutral-800/20"
    >
      <div className="container mx-auto px-8 sm:px-20">
        <h2 className="mb-2 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
          Pendidikan & Pengalaman
        </h2>
        <p className="mb-16 text-center text-sm text-gray-600 dark:text-gray-400">
          Berikut adalah riwayat pendidikan dan pengalaman saya.
        </p>

        <div className="relative pl-8">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200/70 dark:bg-neutral-700/70 md:left-6"></div>

          {datapendidikan.map((edu, index) => (
            <div key={index} className="relative mb-12 pl-8 md:pl-12">
              <div className="absolute -left-1.5 top-1 h-4 w-4 rounded-full border-4 border-orange-500 bg-orange-500 dark:border-gray-900 md:-left-3.5"></div>

              <div className="w-full rounded-lg bg-gray-200/70 p-6 shadow-lg dark:bg-neutral-700/70 md:w-3/4">
                <div className="mb-2 flex items-center justify-between">
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-orange-500"
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {edu.nama}
                    </h3>
                  </a>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      edu.status === "Lulus"
                        ? "bg-green-400 text-white dark:bg-green-700 "
                        : "bg-yellow-400 text-white dark:bg-yellow-700 "
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-semibold text-orange-500">{edu.jurusan}</p>
                </div>
                <div className="mt-2 mb-5 flex flex-col gap-2 text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row sm:gap-6">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>{edu.tahun}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span>{edu.kota}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">
                    Materi Relevan:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.learnings.map((learning, i) => (
                      <span
                        key={i}
                        className="rounded-full border bg-white px-3 py-1 text-sm text-gray-700 border-orange-500 dark:bg-neutral-900/50 dark:text-gray-200"
                      >
                        {learning}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="py-7"></div>

        <div className="relative pl-8">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200/70 dark:bg-neutral-700/70 md:left-6"></div>

          {datapengalaman.map((exp, index) => (
            <div key={index} className="relative mb-12 pl-8 md:pl-12">
              <div className="absolute -left-1.5 top-1 h-4 w-4 rounded-full border-4 border-orange-500 bg-orange-500 dark:border-gray-900 md:-left-3.5"></div>

              <div className="w-full rounded-lg bg-gray-200/70 p-6 shadow-lg dark:bg-neutral-700/70 md:w-3/4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {exp.nama}
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-semibold text-orange-500">{exp.posisi}</p>
                </div>
                <div className="mt-2 mb-2 flex flex-col gap-2 text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row sm:gap-6">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>{exp.tahun}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span>{exp.kota}</span>
                  </div>
                </div>
                <p className="mb-5 text-sm text-gray-900 dark:text-gray-100">
                  {exp.deskripsi}
                </p>
                <div className="mt-4">
                  <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">
                    Teknologi & Keterampilan yang Dipelajari:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.learnings.map((learning, i) => (
                      <span
                        key={i}
                        className="rounded-full border bg-white px-3 py-1 text-sm text-gray-700 border-orange-500 dark:bg-neutral-900/50 dark:text-gray-200"
                      >
                        {learning}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
