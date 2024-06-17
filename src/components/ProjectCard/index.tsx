import { Pill } from "components/Pill";
import { useIntersection } from "hooks/useIntersection";
import Image from "next/image";
import styled from "styled-components";
import { ProjectType } from "../../../types/ProjectType";
import { ProjectBody } from "./ProjectBody";
import { ProjectFooter } from "./ProjectFooter";

export const ProjectCard = ({
    title,
    githubUrl,
    deployUrl,
    description,
    image,
    tags,
}: ProjectType) => {
    const { isIntersecting, ref } = useIntersection({ recurrence: "always" });

    return (
        <StyledContainer ref={ref} isIntersecting={isIntersecting}>
            <StyledImageContainer>
                <Image
                    className="projectImage"
                    src={image.url}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                />
                <StyledHSpan>
                    {tags &&
                        tags?.map((tag) => (
                            <Pill key={tag.name} text={tag.name} />
                        ))}
                </StyledHSpan>
            </StyledImageContainer>
            <ProjectBody title={title} description={description} />
            <ProjectFooter
                githubUrl={githubUrl}
                deployUrl={deployUrl}
                tags={tags}
            />
        </StyledContainer>
    );
};

const StyledContainer = styled.div<{ isIntersecting: boolean }>`
    transform: ${({ isIntersecting }) =>
        isIntersecting ? "scale(1)" : "scale(0.90)"};
    transition: transform 250ms ease-in-out;

    .projectImage {
        object-fit: contain;
        height: auto;
        max-height: 30rem;
        width: 100%;
        padding: 1rem;
        margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
        gap: 0rem;
        margin-inline: 0rem;
        max-width: 100vw;

        .projectCover {
            max-height: 400px;
            margin-bottom: 0rem;
        }
    }
`;

const StyledHSpan = styled.span`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    position: absolute;
    left: 0rem;
    bottom: 0rem;
    gap: 0.25rem;
    padding-block: 0.5rem;

    @media (max-width: 768px) {
        position: static;
    }
`;

const StyledImageContainer = styled.span`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
`;
