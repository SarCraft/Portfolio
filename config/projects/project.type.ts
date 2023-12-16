import type { Skill } from "../skill/skills.type";

export type project = {
    name: string;
    lien: string;
    date: string;
    description: string;
    skills: Skill[];
}