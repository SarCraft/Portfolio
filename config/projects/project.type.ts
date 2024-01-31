import type { Skill } from "../skill/skills.type";
import { Techno } from "../techno/technos.type";

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