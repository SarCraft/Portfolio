import { Separator } from "@/components/ui/separator";
import { projects } from '@/config/projects/project';
import { CardProject } from '@/components/CardProject/CardProject';
import { ProjectType } from '@/config/projects/project.type';

function ProjectList() {
    return (
        <section>
            <h1 className="text-3xl font-bold flex mx-auto justify-center w-1/2 text-white mt-16">Projets</h1>
            <div className="flex flex-wrap justify-start mx-16">
                <h2 className="text-2xl w-1/2 text-gray-600 mt-16">Fullstack</h2><Separator />
            </div>
            <div className="flex flex-row flex-wrap gap-5 text-xl pt-3 justify-start mt-6 mx-16">
                {projects.filter(project => project.type === ProjectType.Fullstack).map(project => (
                <CardProject 
                    key={`${project.name} ${project.date}`} 
                    name={project.name} 
                    link={project.link}
                    open={project.open}
                    date={project.date}
                    description={project.description} 
                    skills={project.skills || []} 
                    technos={project.technos || []} 
                />
                ))}
            </div>
            <div className="flex flex-wrap justify-start mx-16">
                <h2 className="text-2xl w-1/2 text-gray-600 mt-16">UI/UX Design</h2><Separator />
            </div>
            <div className="flex flex-row flex-wrap gap-5 text-xl pt-3 justify-start mt-6 mx-16">
                {projects.filter(project => project.type === ProjectType.Design).map(project => (
                <CardProject 
                    key={`${project.name} ${project.date}`} 
                    name={project.name} 
                    link={project.link}
                    open={project.open}
                    date={project.date}
                    description={project.description} 
                    skills={project.skills || []} 
                    technos={project.technos || []} 
                />
                ))}
            </div>
            <div className="flex flex-wrap justify-start mx-16">
                <h2 className="text-2xl w-1/2 text-gray-600 mt-16">Other</h2><Separator />
            </div>
            <div className="flex flex-row flex-wrap gap-5 text-xl pt-3 justify-start mt-6 mx-16">
                {projects.filter(project => project.type === ProjectType.Other).map(project => (
                <CardProject 
                    key={`${project.name} ${project.date}`} 
                    name={project.name} 
                    link={project.link}
                    open={project.open}
                    date={project.date}
                    description={project.description} 
                    skills={project.skills || []} 
                    technos={project.technos || []} 
                />
                ))}
            </div>
        </section>
    );
}

export { ProjectList };