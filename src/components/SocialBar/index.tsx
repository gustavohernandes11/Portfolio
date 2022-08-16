import * as Styled from "./styles.js";
import { Github, Linkedin, Facebook } from "@styled-icons/boxicons-logos";
import { IconButton } from "@mui/material";
import Link from "next/link";

export const SocialBar = () => {
    return (
        <Styled.Container>
            <Link href="https://github.com/gustavohernandes11" target="_blank">
                <IconButton>
                    <Github height={25} width={25} />
                </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/gustavo-hernandes11/">
                <IconButton>
                    <Linkedin height={25} width={25} />
                </IconButton>
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100013794438299">
                <IconButton>
                    <Facebook height={25} width={25} />
                </IconButton>
            </Link>
        </Styled.Container>
    );
};
