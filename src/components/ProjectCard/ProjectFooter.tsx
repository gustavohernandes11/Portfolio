import { ArrowRight } from "@styled-icons/feather";
import { Github } from "@styled-icons/simple-icons";
import styled from "styled-components";
import { TagType } from "../../../types/TagType";
import { Button } from "../Button";

export interface FooterType {
    githubUrl?: string;
    deployUrl?: string;
    tags?: TagType[];
}

export const ProjectFooter = ({ githubUrl, deployUrl }: FooterType) => {
    return (
        <FooterContainer>
            <HorizontalStack>
                {githubUrl && (
                    <Button
                        type="button"
                        target="_blank"
                        href={githubUrl}
                        variant="secondary"
                        icon={<Github color="white" size="25" />}
                    >
                        Github
                    </Button>
                )}
                {deployUrl && (
                    <Button
                        target="_blank"
                        href={deployUrl}
                        as="a"
                        icon={<ArrowRight color="white" size="25" />}
                    >
                        Confira
                    </Button>
                )}
            </HorizontalStack>
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
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    gap: 2rem;
    background: ${({ theme }) => theme.colors.black};

    @media (max-width: 768px) {
        gap: 1rem;
        flex-wrap: wrap-reverse;
        justify-content: end;
    }
`;

const HorizontalStack = styled.span`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`;
