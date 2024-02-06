import { NextJS, ReactJS, TailwindCSS,  TypeScript, Vercel, Cpp } from "@/config/skill/skills";
import type { project } from "./project.type";
import { Figma } from "@/config/techno/technos";

export const projects: project[] = [
  {
    name: "Portfolio",
    lien: "https://github.com/SarCraft/portfolio",
    open: true,
    date: "1/12/2023 => Aujourd'hui",
    description: "Mon portfolio personnel",
    skills: [ReactJS, TypeScript, TailwindCSS, Vercel, NextJS],
    type: "Fullstack"
  },
  {
    name: "Nakama Manga",
    lien: "https://www.figma.com/file/q54MiZMjYLNa7WcXcT2MB2/NakamaManga?type=design&t=D8yJLTZEOHclMoiB-6",
    open: true,
    date: "01/02/2024 => 06/04/2024",
    description: "Maquette web pour un site commercial de manga",
    technos: [Figma],
    type: "Design"
  },
  {
    name: "Nakama Manga",
    lien: "https://www.figma.com/file/q54MiZMjYLNa7WcXcT2MB2/NakamaManga?type=design&t=D8yJLTZEOHclMoiB-6",
    open: true,
    date: "01/02/2024 => 06/04/2024",
    description: "Site commercial pour une librairie de manga",
    technos: [ReactJS, TypeScript, TailwindCSS, Vercel, NextJS],
    type: "Fullstack"
  },
  {
    name: "Mystic MCBE - Website",
    lien: "#",
    open: false,
    date: "01/02/2024 => Today",
    description: "Sit pour un serveur Minecraft Bedrock, MMORPG",
    skills: [NextJS, ReactJS, TypeScript, TailwindCSS, Vercel],
    type: "Fulltack"
  },
  {
    name: "Mystic MCBE",
    lien: "#",
    open: false,
    date: "01/02/2024 => Today",
    description: "Serveur Minecraft Bedrock, MMORPG",
    skills: [Cpp],
    type: "Other"
  }
]