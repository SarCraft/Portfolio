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
  {
    name: "Mon deuxième projet",
    lien: "#",
    date: "1/12/2023 => Aujourd'hui",
    description: "C'est mon deuxième projet",
    skills: [TailwindCSS, NextJS, TypeScript, Vercel]
  },
  {
    name: "Mon deuxième projet",
    lien: "#",
    date: "1/12/2023 => Aujourd'hui",
    description: "C'est mon deuxième projet",
    skills: [TailwindCSS, NextJS, TypeScript, Vercel]
  },
]