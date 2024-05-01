import { Animate } from "components/Animate";
import { Social } from "components/Social";
import styled from "styled-components";
import { Mixins } from "styles/Mixins";

export const Footer = () => (
    <StyledFooter>
        <Animate type="slideLeft">
            <Social color="white" />
        </Animate>
        <Animate type="slideLeft">
            <p>© 2024-present Gustavo Hernandes. All Rights Reserved.</p>
        </Animate>
    </StyledFooter>
);

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 3rem 5rem;
    background-color: black;
    color: #bebebe;

    @media (max-width: 768px) {
        ${Mixins.flexCenter("column")}
    }
`;
