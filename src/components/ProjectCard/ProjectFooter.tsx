import { Github } from "@styled-icons/simple-icons";
import styled from "styled-components";
import { Mixins } from "styles/Mixins";
import { TagType } from "../../../types/TagType";
import { Button } from "../Button";

export interface FooterType {
    githubUrl?: string;
    deployUrl?: string;
    tags?: TagType[];
}

export const ProjectFooter = ({ githubUrl, deployUrl, tags }: FooterType) => {
    return (
        <FooterContainer>
            <HStack>
                {githubUrl && (
                    <GithubButton
                        type="button"
                        target="_blank"
                        href={githubUrl}
                    >
                        <GithubButtonText>Github</GithubButtonText>
                        <Github color="white" size="25" />
                    </GithubButton>
                )}
                {deployUrl && (
                    <Button
                        target="_blank"
                        href={deployUrl}
                        as="a"
                        variant="purple-rounded"
                    >
                        Confira →
                    </Button>
                )}
            </HStack>
        </FooterContainer>
    );
};
const FooterContainer = styled.div`
    display: flex;
    align-items: start;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    padding: 1rem;
    gap: 2rem;
    background: rgba(0, 0, 0, 1);

    @media (max-width: 768px) {
        gap: 1rem;
        flex-wrap: wrap-reverse;
        justify-content: end;
    }
`;

const GithubButton = styled.a`
    ${Mixins.flexCenter()}
    text-decoration: none;
`;

const GithubButtonText = styled.p`
    padding-right: 0.5rem;
    color: white;
`;

const HStack = styled.span`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;
