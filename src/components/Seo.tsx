import Head from "next/head";
import { MetaType } from "../../types/MetaType";

type SeoProps = {
    meta: MetaType;
};
const defaultMeta = {
    title: "Gustavo Hernandes da Silva | Portfolio",
    description: "Portfolio de um desenvolvedor fullstack",
    keywords:
        "Portfolio, Javascript, Css, HTML, React, Typescript, Engenharia de Produção, Projetos, Styled-Components, Nodejs, Node, API, Next, Nextjs",
};

export const Seo = ({ meta: incomingMeta }: SeoProps) => {
    const meta = Object.assign(defaultMeta, incomingMeta);

    return (
        <Head>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
        </Head>
    );
};
