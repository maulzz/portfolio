// src/components/AboutSection.tsx

import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaLaravel,
  FaReact,
  FaPython,
  FaGitAlt,
  FaUnity,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiMysql, SiBlender, SiCanva } from "react-icons/si";
import { TbBrandCSharp, TbSql } from "react-icons/tb";

const languagesAndFrameworks = [
  { name: "HTML5", icon: <FaHtml5 className="h-8 w-8 text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="h-8 w-8 text-blue-500" /> },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="h-8 w-8 text-yellow-400" />,
  },
  { name: "PHP", icon: <FaPhp className="h-8 w-8 text-indigo-400" /> },
  { name: "Laravel", icon: <FaLaravel className="h-8 w-8 text-red-500" /> },
  { name: "React", icon: <FaReact className="h-8 w-8 text-sky-400" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="h-8 w-8 text-teal-400" />,
  },
  { name: "Python", icon: <FaPython className="h-8 w-8 text-yellow-500" /> },
  { name: "C#", icon: <TbBrandCSharp className="h-8 w-8 text-purple-600" /> },
  { name: "SQL", icon: <TbSql className="h-8 w-8 text-blue-600" /> },
];

const toolsAndTechnologies = [
  { name: "Git", icon: <FaGitAlt className="h-8 w-8 text-red-600" /> },
  { name: "MySQL", icon: <SiMysql className="h-8 w-8 text-blue-600" /> },
  { name: "Blender", icon: <SiBlender className="h-8 w-8 text-orange-500" /> },
  {
    name: "Unity",
    icon: <FaUnity className="h-8 w-8 text-gray-800 dark:text-gray-200" />,
  },
  { name: "Canva", icon: <SiCanva className="h-8 w-8 text-purple-400" /> },
];

const SkillCard = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
  <div className="flex items-center gap-4 rounded-lg bg-gray-200 p-4 transition-colors hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:scale-105 duration-300">
    {icon}
    <h4 className="font-semibold">{name}</h4>
  </div>
);

export default function AboutSection() {
  return (
    <section id="skills" className="py-12 ">
      <div className="container mx-auto px-8 sm:px-20">
        <h2 className="mb-2 text-center text-4xl font-bold text-gray-900 dark:text-gray-100">
          Skills & Tools
        </h2>
        <p className="mb-16 text-center text-sm text-gray-600 dark:text-gray-400">
          Berikut adalah keterampilan dan alat yang saya kuasai.
        </p>

        <div className="mt-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="bg-gray-100 dark:bg-neutral-800/40 p-7 rounded-xl shadow-2xl">
              <h3 className="mb-6 text-center text-2xl font-bold md:text-left">
                Bahasa & Framework
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {languagesAndFrameworks.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-neutral-800/40 p-7 rounded-xl shadow-2xl">
              <h3 className="mb-6 text-center text-2xl font-bold md:text-left">
                Teknologi & Aplikasi
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {toolsAndTechnologies.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
