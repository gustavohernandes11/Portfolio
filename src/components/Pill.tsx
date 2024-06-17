import styled from "styled-components";

type PillType = {
    text: string;
};

export const Pill = ({ text }: PillType) => (
    <StyledContainer>
        <StyledText>{text}</StyledText>
    </StyledContainer>
);

const StyledContainer = styled.div`
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 2.5rem;
    background-color: ${({ theme }) => theme.colors.black};
`;

const StyledText = styled.p`
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.white};
`;
