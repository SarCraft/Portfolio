import { Skill } from "@/config/skill/skills.type";

export type CardProjectProps = {
  name: string;
  lien: string;
  date: string;
  description: string;
  skills: Skill[];
}