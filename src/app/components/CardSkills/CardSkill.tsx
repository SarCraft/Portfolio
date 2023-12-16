import { CardSkillsProps } from "./CardSkill.type";
import Image from "next/image";

const CardSkill = ({name, date, skills}: CardSkillsProps) => {
    return (
        <div className="p-4 bg-opacity-5 bg-gray-600 rounded-xl border border-white">
            <div className="flex flex-row flex-wrap gap-2 text-xl pt-3 justify-center">
                {skills?.map((skill, idx) => (
                    <a key={idx} href={skill.url}>
                        <Image src={skill.pathImage} width={75} height={75} className='border border-white rounded-full' alt='skill card' />
                    </a>
                ))}
            </div>
            <p className="mt-8 text-lg text-white">{name}</p>
            <p className="text-sm text-gray-400">{date}</p>
        </div>
    )
}

export default CardSkill