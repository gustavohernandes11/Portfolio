import { Logo } from "components/Logo";
import styled from "styled-components";
import { NavLink } from "./NavLink";

export const Header: React.FC = () => (
    <StyledFixed>
        <StyledHeader>
            <span>
                <Logo />
            </span>
            <span>
                <NavLink href="#home">INÍCIO</NavLink>
                <NavLink href="#about">SOBRE</NavLink>
                <NavLink href="#projects">PROJETOS</NavLink>
                <NavLink href="#contact">CONTATO</NavLink>
            </span>
        </StyledHeader>
    </StyledFixed>
);

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 1rem 10rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;
export const StyledFixed = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`;
