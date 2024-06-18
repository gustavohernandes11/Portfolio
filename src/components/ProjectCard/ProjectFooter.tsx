import { ArrowRight } from "@styled-icons/feather";
import { Github } from "@styled-icons/simple-icons";
import styled from "styled-components";
import { theme } from "styles/Theme";
import { TagType } from "../../../types/TagType";
import { Button } from "../Button";

export interface FooterType {
    githubUrl?: string;
    deployUrl?: string;
    tags?: TagType[];
}

export const ProjectFooter = ({ githubUrl, deployUrl }: FooterType) => {
    return (
        <StyledContainer>
            <StyledHStack>
                {githubUrl && (
                    <Button
                        type="button"
                        target="_blank"
                        href={githubUrl}
                        as="a"
                        variant="secondary"
                        icon={<Github color={theme.colors.white} size="25" />}
                    >
                        Github
                    </Button>
                )}
                {deployUrl && (
                    <Button
                        target="_blank"
                        href={deployUrl}
                        as="a"
                        icon={
                            <ArrowRight color={theme.colors.white} size="25" />
                        }
                    >
                        Confira
                    </Button>
                )}
            </StyledHStack>
        </StyledContainer>
    );
};
const StyledContainer = styled.div`
    display: flex;
    align-items: start;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    padding: 1rem;
    border-radius: 0rem 0rem 0.5rem 0.5rem;
    background: ${({ theme }) => theme.colors.black};

    @media (max-width: 768px) {
        gap: 1rem;
        justify-content: end;
    }
`;

const StyledHStack = styled.span`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`;
