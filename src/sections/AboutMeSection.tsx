import { SectionContainer } from "components/SectionContainer";
import { Social } from "components/Social";
import { Text } from "components/Text";
import styled from "styled-components";
import { serializeLexical } from "utils/serializeLexical";

type AboutMeType = {
    content: any;
};

export const AboutMeSection = ({ content }: AboutMeType) => (
    <SectionContainer>
        <StyledTextContainer>
            <Text size="big">Olá,</Text>
            {content &&
                !Array.isArray(content) &&
                typeof content === "object" &&
                "root" in content &&
                serializeLexical({
                    nodes: content?.root?.children,
                })}
        </StyledTextContainer>
        <Social />
    </SectionContainer>
);

const StyledTextContainer = styled.span`
    & p {
        margin-bottom: 1rem;
    }
    // to apply margin bottom in nested elements
    p {
        display: inline-grid;
    }
`;
