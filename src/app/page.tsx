import { ProjectHome } from '@/components/Home/ProjectHome';
import { NavbarHome } from '@/components/Home/NavbarHome';
import { BannerHome } from '@/components/Home/BannerHome';
import { AvatarHome } from '@/components/Home/AvatarHome';
import { MediaButtonHome } from '@/components/Home/MediaButtonHome';
import { SkillTechnoHome } from '@/components/Home/SkillTechnoHome';
import { AboutHome } from '@/components/Home/AboutHome';
import { ContactHome } from '@/components/Home/ContactHome';
import { FooterHome } from '@/components/Home/FooterHome';

function Page() {
  return (
    <>
      <NavbarHome />
      <BannerHome />
      <AvatarHome />
      <MediaButtonHome />
      <AboutHome />
      <ProjectHome />
      <SkillTechnoHome />
      <ContactHome />
      <FooterHome />
    </>
  );
}

export default Page;