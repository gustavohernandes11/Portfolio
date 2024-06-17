import styled from "styled-components";
import { WrapperType } from "../../types/WrapperType";

export const Heading = ({ children, as, ...props }: WrapperType) => (
    <StyledHeading {...props}>{children}</StyledHeading>
);

const StyledHeading = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;