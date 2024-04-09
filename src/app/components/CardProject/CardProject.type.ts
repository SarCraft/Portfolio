import { Skill } from "@/config/skill/skills.type";
import { Techno } from "@/config/techno/technos.type";

export type CardProjectProps = {
  name: string;
  link: string;
  open: boolean;
  date: string;
  description: string;
  skills?: Skill[];
  technos?: Techno[];
}
