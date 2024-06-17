import type { GetStaticProps, NextPage } from "next";

import { Header } from "components/Header";
import { Main } from "components/Main";
import { AboutMeSection } from "sections/AboutMeSection";
import { ContactSection } from "sections/ContactSection";
import { Footer } from "sections/Footer";
import { ProjectsSection } from "sections/ProjectsSection";
import { SkillsSection } from "sections/SkillsSection";
import { Seo } from "../src/components/Seo";
import { MetaType } from "../types/MetaType";
import { ProjectType } from "../types/ProjectType";

type HomeProps = {
    data: {
        about: any;
        projects: ProjectType[];
        meta: MetaType;
    };
};

const Home: NextPage<HomeProps> = ({ data: { about, projects, meta } }) => {
    return (
        <>
            <Main>
                <Seo meta={meta} />
                <Header />
                <AboutMeSection content={about} />
                <SkillsSection />
                <ProjectsSection projects={projects} />
                <ContactSection />
            </Main>
            <Footer />
        </>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const url = `${process.env.PAYLOAD_CMS_URL}/api/globals/portfolio`;
    const data = await fetch(url).then((data) => data.json());
    return {
        props: {
            data,
        },
    };
};
