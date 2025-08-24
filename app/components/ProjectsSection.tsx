// src/components/ProjectsSection.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/app/data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-8 sm:px-20">
        <h2 className="mb-2 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
          Proyek Saya
        </h2>
        <p className="mb-16 text-center text-sm text-gray-600 dark:text-gray-400">
          Berikut adalah beberapa proyek yang telah saya kerjakan.
        </p>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projectsData.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className='flex'>
              <div className="group block overflow-hidden rounded-lg  shadow-md transition-all duration-300 hover:shadow-xl bg-gray-100 dark:bg-neutral-800/40">
                <div className="relative h-56 w-full shrink-0 overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={`Screenshot dari ${project.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className=" flex flex-1 flex-col p-6">
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
                        className="rounded-full bg-orange-500 px-3 py-1 text-sm font-semibold text-white "
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
      </div>
    </section>
  );
}