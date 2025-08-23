// app/projects/[slug]/page.tsx

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // <-- Import Link
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { projectsData } from "@/app/data/projects"; // Import data dari file terpusat
import { ArrowLeftIcon } from "@heroicons/react/24/solid"; // <-- Import Ikon Panah
import { FaCalendarAlt } from "react-icons/fa"; // <-- Import Ikon Kalender

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center">
        Proyek tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl py-14 px-4">
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-2 text-neutral-500 transition-colors hover:text-orange-500 dark:text-neutral-400"
      >
        <ArrowLeftIcon className="h-5 w-5" />
        <span className="font-bold">Kembali ke semua proyek</span>
      </Link>

      <div className="mb-8 overflow-hidden rounded-lg shadow-2xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="fade"
          className="mySwiper"
        >
          {project.images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-64 w-full md:h-96">
                <Image
                  src={img}
                  alt={`Tampilan proyek ${project.title} #${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <h1 className="mb-4 text-left text-4xl font-bold md:text-5xl">
        {project.title}
      </h1>

      <div className="mb-3 flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
        <FaCalendarAlt />
        <span>{project.date}</span>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold">Deskripsi Proyek</h2>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {project.descriptionPreview}
        </p>
      </div>
    </div>
  );
}
