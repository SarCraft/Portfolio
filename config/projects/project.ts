import { NextJS, ReactJS, TailwindCSS,  TypeScript, Vercel, Cpp } from "@/config/skill/skills";
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
    name: "Nakama Manga",
    lien: "https://www.figma.com/file/q54MiZMjYLNa7WcXcT2MB2/NakamaManga?type=design&t=D8yJLTZEOHclMoiB-6",
    date: "30/01/2024 => 11/03/2024",
    description: "Plateforme de gestion et partage de projet étudiant",
    technos: [Figma],
    type: "Design"
  },
  {
    name: "Mystic MCBE",
    lien: "#",
    date: "01/02/2024 => Today",
    description: "Serveur Minecraft Bedrock, MMORPG",
    skills: [Cpp],
    type: "other"
  }
]