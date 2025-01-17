import styled from "styled-components";

export interface HeaderType {
    title: string;
    description: string;
}

export const ProjectBody = ({ title, description }: HeaderType) => {
    return (
        <StyledContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription color="white">{description}</StyledDescription>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    background: ${({ theme }) => theme.colors.black};
`;

const StyledTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const StyledDescription = styled.p`
    margin-bottom: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
`;
