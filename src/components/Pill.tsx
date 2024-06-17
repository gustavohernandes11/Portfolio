import styled from "styled-components";

type PillType = {
    text: string;
};
export const Pill = ({ text }: PillType) => (
    <Container>
        <StyledText>{text}</StyledText>
    </Container>
);

const Container = styled.div`
    border: 1px solid white;
    border-radius: 2.5rem;
    background-color: #000000;
    margin: 0;
`;

const StyledText = styled.div`
    font-size: 0.8rem;
    margin: 0;
    padding: 0.5rem 1rem;
    color: #ffffff;
`;
