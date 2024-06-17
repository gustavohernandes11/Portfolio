import styled from "styled-components";
import { WrapperType } from "../../types/WrapperType";

export const Main = ({ children }: WrapperType) => {
    return <StyledMain>{children}</StyledMain>;
};

export const StyledMain = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 1rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
