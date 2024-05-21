import styled from "styled-components";
import { Mixins } from "styles/Mixins";
import { WrapperType } from "../../types/WrapperType";

export const Title = ({ children, as, ...props }: WrapperType) => (
    <StyledHeading {...props}>{children}</StyledHeading>
);

const StyledHeading = styled.h2`
    ${Mixins.flexCenter()}
    text-align: center;
    font-size: 2rem;
    margin: 2rem 0;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;
