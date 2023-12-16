import { CardTechnosProps } from "./CardTechno.type";
import Image from "next/image";

const CardTechno = ({name, date, technos}: CardTechnosProps) => {
    return (
        <div className="p-4 bg-opacity-5 bg-gray-600 rounded-xl border border-white">
            <div className="flex flex-row flex-wrap gap-2 text-xl pt-3 justify-center">
                {technos.map((techno, idx) => (
                    <a key={idx} href={techno.url}>
                        <Image src={techno.pathImage} width={75} height={75} className='border border-white rounded-full' alt='techno card' />
                    </a>
                ))}
            </div>
            <p className="mt-8 text-lg text-white">{name}</p>
            <p className="text-sm text-gray-400">{date}</p>
        </div>
    )
}

export default CardTechno