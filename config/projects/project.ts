import { NextJS, ReactJS, TailwindCSS,  TypeScript, Vercel, Cpp } from "@/config/skill/skills";
import { ProjectType, type project } from "./project.type";
import { Figma } from "@/config/techno/technos";

export const projects: project[] = [
  {
    name: "Portfolio",
    link: "https://github.com/SarCraft/portfolio",
    open: true,
    date: "1/12/2023 => Aujourd'hui",
    description: "Mon portfolio personnel",
    skills: [ReactJS, TypeScript, TailwindCSS, Vercel, NextJS],
    type: ProjectType.Fullstack
  },
  {
    name: "Mystic MCBE - Website",
    link: "#",
    open: false,
    date: "01/02/2024 => Today",
    description: "Site pour un serveur Minecraft Bedrock, MMORPG",
    skills: [NextJS, ReactJS, TypeScript, TailwindCSS, Vercel],
    type: ProjectType.Fullstack
  },
  {
    name: "Nakama Manga",
    link: "https://www.figma.com/file/q54MiZMjYLNa7WcXcT2MB2/NakamaManga?type=design&t=D8yJLTZEOHclMoiB-6",
    open: true,
    date: "01/02/2024 => 06/04/2024",
    description: "Maquette web pour un site commercial de manga",
    technos: [Figma],
    type: ProjectType.Design
  },
  {
    name: "ESGI - Modern",
    link: "#",
    open: true,
    date: "06/02/2024 => Today",
    description: "Site de l'ESGI, école d'informatique, version modernisé",
    skills: [ReactJS, TypeScript, TailwindCSS, Vercel, NextJS],
    type: ProjectType.Fullstack
  },
  {
    name: "Nakama Manga",
    link: "#",
    open: false,
    date: "01/02/2024 => 06/04/2024",
    description: "Site commercial pour une librairie de manga",
    technos: [ReactJS, TypeScript, TailwindCSS, Vercel, NextJS],
    type: ProjectType.Fullstack
  },
  {
    name: "Mystic MCBE",
    link: "#",
    open: false,
    date: "01/02/2024 => Today",
    description: "Serveur Minecraft Bedrock, MMORPG",
    skills: [Cpp],
    type: ProjectType.Other
  } 
]