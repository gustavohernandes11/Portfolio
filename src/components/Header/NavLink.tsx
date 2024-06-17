import Link from "next/link";
import styled from "styled-components";

type NavLinkProps = {
    children: React.ReactNode;
    href: string;
    onClick?: () => void;
};

export const NavLink = ({ children, href, onClick }: NavLinkProps) => {
    return (
        <StyledLink href={href} onClick={onClick}>
            {children}
        </StyledLink>
    );
};

export const StyledLink = styled(Link)`
    position: relative;
    margin-left: 0.5rem;
    color: black;
    text-decoration: none;
    font-size: 1rem;
    transition: color 500ms ease;

    :hover {
        color: ${({ theme }) => theme.colors.purple};
    }
`;
