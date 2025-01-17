import { SectionContainer } from "components/SectionContainer";
import { StaticImageData } from "next/image";

import { Heading } from "components/Heading";
import { ProjectCard } from "components/ProjectCard";
import styled from "styled-components";
import { ProjectType } from "../../types/ProjectType";

export type Image = {
    alt: string;
    url: string | StaticImageData;
    width: number;
    height: number;
};

type ProjectsType = {
    projects: ProjectType[];
};

export const ProjectsSection = ({ projects }: ProjectsType) => {
    return (
        <SectionContainer id="projects">
            <Heading>Projetos</Heading>
            <StyledGrid>
                {projects.map((proj) => (
                    <ProjectCard {...proj} />
                ))}
            </StyledGrid>
        </SectionContainer>
    );
};

const StyledGrid = styled.div`
    display: grid;
    gap: 1rem;
`;
