import React from 'react'
import type { CardProjectProps } from './CardProject.type'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const CardProject = ({name, link, open, date, description, skills, technos}: CardProjectProps) => {

  return (
    <div className="w-72 p-4 bg-opacity-5 bg-gray-600 border border-white rounded-md sm:flex-col">
      <p className='font-medium text-white'>{name}</p>
      <p className='text-gray-400'>{date}</p>
      <p className='flex flex-row flex-wrap gap-5 text-lg text-gray-400'>{description}</p>
      <div className='py-2'>
        <Button className='text-white bg-transparent hover:bg-slate-500 hover:bg-opacity-20 hover:transition' variant="outline" size="sm" disabled={!open}>
            <Link target='_blank' href={link}>{open ? 'Open Source' : 'Private'}</Link>
        </Button>
      </div>
      <div className="flex gap-1">
        {skills?.map((skill, idx) => (
          <a key={idx} href={skill.url}>
            <Image src={skill.pathImage} width={30} height={30} className='w-8 h-8 border-2 rounded-full border-gray-800 hover:border-gray-300 ' alt='icon'/>
          </a>
        ))}
      </div>
      <div className="flex gap-1">
        {technos?.map((techno, idx) => (
          <a key={idx} href={techno.url}>
            <Image src={techno.pathImage} width={30} height={30} className='w-8 h-8 border-2 rounded-full border-gray-800 hover:border-gray-300 ' alt='icon'/>
          </a>
        ))}
      </div>
    </div>
  )
}

export { CardProject }