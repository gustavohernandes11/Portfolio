import Image from "next/image";
import React from "react";
import styled from "styled-components";
import RoundedArrowSVG from "../assets/RoundedArrow.svg";
import { Animate } from "../components/Animate";
import { Mixins } from "styles/Mixins";

interface ComponentType {
    children?: React.ReactNode;
}

export const WrapBetweenArrows = ({ children }: ComponentType) => {
    return (
        <Wrapper>
            <Animate type="slideRight">
                <StyledImage src={RoundedArrowSVG} alt="arrow" />
            </Animate>
            {children}
            <Animate type="slideLeft">
                <StyledImage
                    style={{ transform: "Rotate(180deg)" }}
                    src={RoundedArrowSVG}
                    alt="arrow"
                />
            </Animate>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    ${Mixins.flexCenter()}
    gap: 5rem;

    @media (max-width: 768px) {
        gap: 1rem;
    }
`;
const StyledImage = styled(Image)`
    @media (max-width: 768px) {
        display: none;
    }
`;
