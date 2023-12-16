"use client";

import { projects } from '@/config/projects/project';
import { CardProject } from '@/components/CardProject/CardProject';
import { NextJS } from '@/config/skill/skills';
import { Separator } from '@radix-ui/react-separator';

function ProjectHome() {
    return (
      <section>
        <h1 className="text-3xl font-bold flex mx-auto justify-center w-1/2 text-white mt-16">Projects</h1>

        <h2 className="text-2xl flex mx-16 justify-start w-1/2 text-gray-600 mt-16">Fullstack</h2>
        <Separator className="flex mx-16 justify-start w-1/2" />

        <div className="flex flex-row flex-wrap gap-5 text-xl pt-3 justify-start mt-6 mx-16">
            {projects.map((project, idx) => (
              <CardProject key={idx} name={project.name} lien={project.lien} date={project.date} description={project.description} skills={[NextJS]} />
            ))}
        </div>
      </section>
    );
  }

export { ProjectHome }