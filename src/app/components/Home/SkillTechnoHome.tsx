import { personalSkills } from '@/config/personalSkill/personalSkill';
import CardSkill from '../CardSkills/CardSkill';
import { personalTechnos } from '@/config/personalTechno/personalTechno';
import CardTechno from '../CardTechnos/CardTechno';

function SkillTechnoHome() {
    return (
      <section>
        <h1 id='SkillHome' className="text-3xl font-bold flex mx-auto justify-center w-1/2 text-white mt-16">Skills</h1>
        <div className="flex flex-row flex-wrap gap-5 text-xl pt-3 justify-center mt-6">
          {personalSkills.map((personalSkill, idx) => (
              <CardSkill key={idx} name={personalSkill.name} date={personalSkill.date} skills={personalSkill.skills} />
              )
          )}
        </div>
        <h1 id='TechnoHome' className="text-3xl font-bold flex mx-auto justify-center w-1/2 text-white mt-16">Technos</h1>
        <div className="flex flex-row flex-wrap gap-5 text-xl pt-3 justify-center mt-6">
          {personalTechnos.map((personalTechno, idx) => (
              <CardTechno key={idx} name={personalTechno.name} date={personalTechno.date} technos={personalTechno.technos} />
              )
          )}
        </div>
        <hr className='mt-12 flex mx-auto w-1/4'></hr>
      </section>
    );
  }

export { SkillTechnoHome }