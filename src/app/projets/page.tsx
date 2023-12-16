import { BannerHome } from "@/components/Home/BannerHome";
import { FooterHome } from "@/components/Home/FooterHome";
import { MediaButtonHome } from "@/components/Home/MediaButtonHome";
import { NavbarHome } from "@/components/Home/NavbarHome";
import { AvatarHome } from "@/components/Home/AvatarHome";
import { ProjectHome } from "@/components/Home/ProjectHome";

function ProjectPage() {
    return(
    <>
        <NavbarHome />
        <BannerHome />
        <AvatarHome />
        <MediaButtonHome />
        <ProjectHome />
        <FooterHome />
    </>
    )
}

export default ProjectPage;