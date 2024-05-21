import { Chip } from "components/Chip";
import { useIntersection } from "hooks/useIntersection";
import Image from "next/image";
import styled from "styled-components";
import { ProjectType } from "../../../types/ProjectType";
import { ProjectFooter } from "./ProjectFooter";
import { ProjectHeader } from "./ProjectHeader";

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
            <ProjectHeader title={title} description={description} />
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
                            <Chip key={tag.name} text={tag.name} />
                        ))}
                </TagsContainer>
            </ImageWrapper>
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
    background-color: white;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.58);
    transform: ${({ isIntersecting }) =>
        isIntersecting ? "scale(1)" : "scale(0.75)"};
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
        transform: ${({ isIntersecting }) =>
            isIntersecting ? "scale(1)" : "scale(0.90)"};

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
