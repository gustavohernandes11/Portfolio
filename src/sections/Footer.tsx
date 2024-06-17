import { Social } from "components/Social";
import { Text } from "components/Text";
import styled from "styled-components";
import { Mixins } from "styles/Mixins";

export const Footer = () => (
    <StyledFooter>
        <Content>
            <Social color="white" />
            <Text color="white">© Criado por Gustavo Hernandes da Silva</Text>
        </Content>
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

const Content = styled.div`
    display: grid;
    gap: 1rem;
    grid-column: 2 / 4;

    @media (max-width: 768px) {
        ${Mixins.flexCenter("column")}
    }
`;
