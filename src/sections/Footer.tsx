import { Social } from "components/Social";
import styled from "styled-components";
import { Mixins } from "styles/Mixins";

export const Footer = () => (
    <StyledFooter>
        <Social color="white" />
        <p>© 2024-present Gustavo Hernandes. All Rights Reserved.</p>
    </StyledFooter>
);

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 3rem 5rem;
    gap: 1rem;
    background-color: black;
    color: #bebebe;

    @media (max-width: 768px) {
        ${Mixins.flexCenter("column")}
    }
`;
