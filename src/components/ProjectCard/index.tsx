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
        <Container ref={ref} isIntersecting={isIntersecting}>
            <ImageWrapper>
                <Image
                    className="projectCover"
                    src={image.url}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                />
                <TagsContainer>
                    {tags &&
                        tags?.map((tag) => (
                            <Pill key={tag.name} text={tag.name} />
                        ))}
                </TagsContainer>
            </ImageWrapper>
            <ProjectBody title={title} description={description} />
            <ProjectFooter
                githubUrl={githubUrl}
                deployUrl={deployUrl}
                tags={tags}
            />
        </Container>
    );
};

const Container = styled.div<{ isIntersecting: boolean }>`
    max-width: 75vw;
    transform: ${({ isIntersecting }) =>
        isIntersecting ? "scale(1)" : "scale(0.90)"};
    transition: transform 250ms ease-in-out;
    overflow: hidden;

    .projectCover {
        object-fit: contain;
        height: auto;
        max-height: 30rem;
        width: 100%;
        padding: 1rem;
        margin-bottom: 2rem;
    }

    :hover {
        cursor: grab;
    }
    :active {
        cursor: grabbing;
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

const TagsContainer = styled.span`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: absolute;
    left: 0rem;
    bottom: 0rem;
    gap: 0.25rem;
    padding: 0.5rem;

    @media (max-width: 768px) {
        position: static;
    }
`;

const ImageWrapper = styled.span`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: relative;
`;
