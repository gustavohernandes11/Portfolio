import { css } from "styled-components";

type DirectionOptions = "row" | "column";

export const Mixins = {
    flexCenter: (direction: DirectionOptions = "row") => css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: ${direction};
    `,

    shadow: () => css`
        -webkit-box-shadow: 0px 0px 0px 10px
            ${({ theme }) => theme.colors.border};
        -moz-box-shadow: 0px 0px 0px 10px ${({ theme }) => theme.colors.border};
        box-shadow: 4px 4px 0px 0px ${({ theme }) => theme.colors.border};
    `,

    inputBaseStyles: () => css`
        padding: 1rem;
        border-radius: 0.25rem;
        background-color: ${({ theme }) => theme.colors.white};
        border: 2px solid ${({ theme }) => theme.colors.border};
        width: 100%;

        ::placeholder {
            color: #363636;
        }

        :focus {
            outline-color: ${({ theme }) => theme.colors.border};
            ${Mixins.shadow()}
        }

        @media (max-width: 768px) {
            min-width: 16rem;
        }
    `,
};
