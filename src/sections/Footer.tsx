import { Social } from "components/Social";
import { Text } from "components/Text";
import styled from "styled-components";
import { Mixins } from "styles/Mixins";

export const Footer = () => (
    <StyledFooter>
        <StyledInnerContainer>
            <Social color="white" />
            <Text color="white">© Criado por Gustavo Hernandes da Silva</Text>
        </StyledInnerContainer>
    </StyledFooter>
);

const StyledFooter = styled.footer`
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding-block: 3rem;

    @media (max-width: 768px) {
        padding: 3rem;
        grid-template-columns: 1fr;
    }
`;

const StyledInnerContainer = styled.div`
    display: grid;
    gap: 1rem;
    grid-column: 2 / 4;

    @media (max-width: 768px) {
        ${Mixins.flexCenter("column")}
    }
`;
