import { Animate } from "components/Animate";
import { SectionContainer } from "components/SectionContainer";
import { Social } from "components/Social";
import styled from "styled-components";

type IntroType = {
    name: string;
    title: string;
};

export const Intro = ({ name, title }: IntroType) => (
    <SectionContainer dottedBackground id="home">
        <Content>
            <Animate type="slideLeft">
                <Span>
                    <MainHeading>{name}</MainHeading>
                    <p>{title}</p>
                </Span>
                <Span>
                    <Social />
                </Span>
            </Animate>
        </Content>
    </SectionContainer>
);

const MainHeading = styled.h1`
    font-size: 6rem;
    font-weight: bolder;
    margin: 0.5rem 0;

    @media (max-width: 768px) {
        font-size: 3.25rem;
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 0rem 10rem;
    margin-block: auto;
    max-width: 61.25rem;

    @media (max-width: 768px) {
        margin: 1rem;
        max-width: 100%;
        flex-grow: 1;
    }
`;

const Span = styled.div`
    margin-bottom: 1rem;
`;
