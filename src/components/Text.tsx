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
        <p
            style={{
                fontSize: size === "normal" ? "1rem" : "2rem",
                color: theme.colors[color],
            }}
        >
            {children}
        </p>
    );
};
