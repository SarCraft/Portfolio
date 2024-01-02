import { NextJS, ReactJS, TailwindCSS,  TypeScript, Vercel } from "@/config/skill/skills";
import type { project } from "./project.type";
import { Figma } from "@/config/techno/technos";

export const projects: project[] = [
  {
    name: "Portfolio",
    lien: "https://github.com/SarCraft/portfolio",
    date: "1/12/2023 => Aujourd'hui",
    description: "Mon portfolio personnel",
    skills: [ReactJS, TypeScript, TailwindCSS, Vercel, NextJS],
    type: "Fullstack"
  },
  {
    name: "BetterTierList",
    lien: "https://github.com/SarCraft/bettertierlist",
    date: "26/12/2023 => Aujourd'hui",
    description: "Site de création et partage de tier list",
    skills: [ReactJS, TypeScript, TailwindCSS, Vercel, NextJS],
    type: "Fullstack"
  },
  {
    name: ">_myStudentProject",
    lien: "https://www.figma.com/file/MwS3plXc2Yhf87ZeFtL3uj/Pages?type=design&node-id=2%3A2&mode=design&t=OSG7nxyJfU3gr8Nu-1",
    date: "1/12/2023 => Aujourd'hui",
    description: "Plateforme de gestion et partage de projet étudiant",
    technos: [Figma],
    type: "Design"
  }
]