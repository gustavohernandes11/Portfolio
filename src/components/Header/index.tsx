import { Logo } from "components/Logo";
import styled from "styled-components";
import { NavLink } from "./NavLink";

export const Header: React.FC = () => (
    <StyledHeader>
        <span>
            <Logo />
        </span>
        <span>
            <NavLink href="#skills">Habilidades</NavLink>
            <NavLink href="#projects">Projetos</NavLink>
            <NavLink href="#contact">Contato</NavLink>
        </span>
    </StyledHeader>
);

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    grid-column: 2 / 4;
`;
