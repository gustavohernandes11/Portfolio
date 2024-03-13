import styled from "styled-components";

export interface HeaderType {
    title: string;
    description: string;
}

export const ProjectHeader = ({ title, description }: HeaderType) => {
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
    width: 100%;
    padding: 1rem;
    background: rgba(0, 0, 0, 1);
`;

const ProjectTitle = styled.h3`
    font-size: 2.5rem;
    color: white;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const ProjectDescription = styled.p`
    margin-bottom: 1rem;
    font-size: 1rem;
    color: white;
`;
