import type { Skill } from "@/config/skill/skills.type";
import { Techno } from "@/config/techno/technos.type";


export type project = {
    name: string;
    lien: string;
    open: boolean;
    date: string;
    description: string;
    skills?: Skill[];
    technos?: Techno[];
    type: string;
}