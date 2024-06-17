import { Github, Leetcode, Linkedin } from "@styled-icons/simple-icons";
import { theme } from "styles/Theme";
import { IconButton } from "./IconButton";

type SocialIconProps = {
    icon: string | React.FunctionComponent<{}> | React.ComponentClass<{}, any>;
    href: string;
} & SocialProps;

type SocialProps = {
    color?: "white" | "black";
};

export const Social = ({ color = "black" }: SocialProps) => (
    <span>
        <SocialButton
            icon={Linkedin}
            color={color ?? theme.colors[color]}
            href="https://www.linkedin.com/in/gustavo-hernandes11/"
        />
        <SocialButton
            icon={Github}
            color={color ?? theme.colors[color]}
            href="https://github.com/gustavohernandes11"
        />
        <SocialButton
            icon={Leetcode}
            color={color ?? theme.colors[color]}
            href="https://leetcode.com/hernandes11/"
        />
    </span>
);

const SocialButton = ({ icon, href, color }: SocialIconProps) => {
    return (
        <a href={href}>
            <IconButton color={color} icon={icon} size={24} />
        </a>
    );
};
