import { NextJS, ReactJS, TailwindCSS,  TypeScript, Vercel } from "../skill/skills";
import type { project } from "./project.type";

export const projects: project[] = [
  {
    name: "Portfolio",
    lien: "https://github.com/SarCraft/portfolio",
    date: "1/12/2023 => Aujourd'hui",
    description: "Mon portfolio personnel",
    skills: [TailwindCSS, NextJS, TypeScript, Vercel, ReactJS]
  },
]