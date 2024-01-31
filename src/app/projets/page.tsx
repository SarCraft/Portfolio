import { BannerHome } from "@/components/Home/BannerHome";
import { FooterHome } from "@/components/Home/FooterHome";
import { MediaButtonHome } from "@/components/Home/MediaButtonHome";
import { NavbarHome } from "@/components/Home/NavbarHome";
import { AvatarHome } from "@/components/Home/AvatarHome";
import { ProjectList } from "@/components/Projets/ProjectList";

function ProjectPage() {
    return(
        <>
            <NavbarHome />
            <BannerHome />
            <AvatarHome />
            <MediaButtonHome />
            <ProjectList />
            <FooterHome />
        </>
    )
}

export default ProjectPage;