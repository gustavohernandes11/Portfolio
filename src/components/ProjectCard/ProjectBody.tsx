import styled from "styled-components";

export interface HeaderType {
    title: string;
    description: string;
}

export const ProjectBody = ({ title, description }: HeaderType) => {
    return (
        <HeaderContainer>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.black};
`;

const ProjectTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const ProjectDescription = styled.p`
    margin-bottom: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
`;
