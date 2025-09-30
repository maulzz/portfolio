// src/components/ProjectsSection.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/app/data/projects";

export default function ProjectsSection() {
  const limitedProjects = projectsData.slice(0, 4);
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-8 sm:px-20">
        <div className="mb-16 text-center" data-aos="zoom-in">
          <h2 className="mb-2 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
            Proyek Saya
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Berikut adalah beberapa proyek yang telah saya kerjakan.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2" data-aos="fade-up">
          {limitedProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="flex"
            >
              <div className="group block overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl bg-gray-100 dark:bg-neutral-800/40">
                <div className="relative h-56 w-full shrink-0 overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={`Screenshot dari ${project.title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="px-4 py-2 rounded-lg border border-orange-500 text-white font-semibold bg-black/40 backdrop-blur-sm text-sm transition-opacity opacity-100 md:opacity-0 md:group-hover:opacity-100">
                      Lihat Detail
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {projectsData.length > 4 && (
          <div className="mt-6 text-center" data-aos="fade-up">
            <Link
              href="/projects"
              className="inline-block rounded-lg px-6 py-2 text-white font-semibold shadow underline transition"
            >
              Lihat Selengkapnya
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
