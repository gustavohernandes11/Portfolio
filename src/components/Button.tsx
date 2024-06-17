import styled, { css } from "styled-components";
import { Mixins } from "styles/Mixins";

type ButtonType = {
    variant?: "primary" | "secondary";
    as?: "button" | "a";
    href?: string;
    target?: string;
    icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
    children,
    variant = "primary",
    as = "button",
    href,
    icon,
    ...props
}: ButtonType) => {
    return (
        <StyledButton href={href} as={as} variant={variant} {...props}>
            {children}
            {icon ?? icon}
        </StyledButton>
    );
};

const StyledButton = styled("button")<{
    variant: "primary" | "secondary";
}>`
    ${({ variant }) => css`
        ${Mixins.flexCenter("row")}
        padding: 0.5rem 1rem;
        border: none;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.black};
        border-radius: 0.5rem;
        font-size: 1rem;
        white-space: nowrap;
        gap: 0.5rem;

        :hover {
            cursor: pointer;
        }

        ${variant == "secondary" &&
        css`
            background-color: transparent;
            color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.border};
        `}
        ${variant == "primary" &&
        css`
            background-color: ${({ theme }) => theme.colors.purple};
            color: white;
        `}
    `};
`;
