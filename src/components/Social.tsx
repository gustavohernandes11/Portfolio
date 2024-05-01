import { Github, Leetcode, Linkedin } from "@styled-icons/simple-icons";
import { useMediaQuery } from "hooks/useMediaQuery";
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
            icon={Github}
            color={color}
            href="https://github.com/gustavohernandes11"
        />
        <SocialButton
            icon={Linkedin}
            color={color}
            href="https://www.linkedin.com/in/gustavo-hernandes11/"
        />
        <SocialButton
            icon={Leetcode}
            color={color}
            href="https://leetcode.com/hernandes11/"
        />
    </span>
);

const SocialButton = ({ icon, href, color }: SocialIconProps) => {
    const isTablet = useMediaQuery(1024);

    return (
        <a href={href}>
            <IconButton color={color} icon={icon} size={isTablet ? 20 : 30} />
        </a>
    );
};
