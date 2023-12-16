import { projects } from '@/config/projects/project';
import { CardProject } from '../CardProject/CardProject';
import { Button } from '../ui/button';

function ProjectHome() {
    return (
      <section>
        <h1 className="text-3xl font-bold flex mx-auto justify-center w-1/2 text-white mt-16">Projects</h1>

        <div className="flex flex-row flex-wrap gap-5 text-xl pt-3 justify-center mt-6">
            {projects.map((project, idx) => (
              <CardProject key={idx} name={project.name} lien={project.lien} date={project.date} description={project.description} skills={project.skills} />
            ))}
        </div>

        <div className='mt-8 flex justify-center'>
          <Button className='bg-transparent text-white' variant='outlineHover'><a>More Project</a></Button>
        </div>

        <hr className='mt-12 flex mx-auto w-1/4'></hr>

      </section>
    );
  }

export { ProjectHome }