import type { Skill } from "../skill/skills.type";
import { Techno } from "../techno/technos.type";

export type project = {
    name: string;
    lien: string;
    date: string;
    description: string;
    skills?: Skill[];
    technos?: Techno[];
    type: string;
}