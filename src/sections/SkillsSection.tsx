import {
    Figma,
    Github,
    Nodedotjs,
    ReactLogo,
    Typescript,
} from "@styled-icons/simple-icons";
import { Heading } from "components/Heading";
import { SectionContainer } from "components/SectionContainer";
import { SkillCard } from "components/SkillCard";
import styled from "styled-components";
import { theme } from "styles/Theme";

export const SkillsSection = () => (
    <SectionContainer id="skills">
        <Heading>Habilidades</Heading>
        <Grid>
            <SkillCard
                description="Design e Prototipagem com Figma"
                icon={<Figma width={32} color={theme.colors.black} />}
            />
            <SkillCard
                description="Versionamento de código com Github"
                icon={<Github width={32} color={theme.colors.black} />}
            />
            <SkillCard
                description="Proeficiência com Typescript, HTML e CSS"
                icon={<Typescript width={32} color={theme.colors.black} />}
            />
            <SkillCard
                description="Implementação de interfaces com React"
                icon={<ReactLogo width={32} color={theme.colors.black} />}
            />
            <SkillCard
                description="Criação de APIs com Node e Express"
                icon={<Nodedotjs width={32} color={theme.colors.black} />}
            />
        </Grid>
    </SectionContainer>
);

const Grid = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
`;
