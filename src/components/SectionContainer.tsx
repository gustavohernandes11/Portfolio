import styled from "styled-components";

interface SectionContainerProps {
    children: React.ReactNode;
    id?: string;
}

export const SectionContainer = ({ children, id }: SectionContainerProps) => {
    return <Container id={id}>{children}</Container>;
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    grid-column: 2 / 4;
`;
