import styled from "styled-components";
import { theme } from "styles/Theme";

type TextOptions = {
    children: any;
    size?: "normal" | "big";
    color?: "white" | "black";
};

export const Text = ({
    children,
    size = "normal",
    color = "black",
}: TextOptions) => {
    return (
        <StyledText
            style={{
                fontSize: size === "normal" ? "1rem" : "2rem",
                color:
                    color === "black" ? theme.colors.black : theme.colors.white,
            }}
        >
            {children}
        </StyledText>
    );
};

const StyledText = styled.p``;
