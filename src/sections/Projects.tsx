import { SectionContainer } from "components/SectionContainer";
import { Title } from "components/Title";
import { StaticImageData } from "next/image";

import { ProjectType } from "../../types/ProjectType";
import { Carousel } from "components/Carousel";

export type Image = {
    alt: string;
    url: string | StaticImageData;
    width: number;
    height: number;
};

type ProjectsType = {
    projects: ProjectType[];
};

export const Projects = ({ projects }: ProjectsType) => {
    return (
        <SectionContainer id="projects" dottedBackground center>
            <Title>PROJETOS</Title>
            <Carousel projects={projects} />
        </SectionContainer>
    );
};
