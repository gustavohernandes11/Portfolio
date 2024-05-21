import Image from "next/image";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Animations } from "styles/Animations";
import ArrowSVG from "../assets/Arrow.svg";
import { Animate } from "./Animate";

const scrollDownByOneVh = () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
    });
};

const scrollUpToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

export const FixedArrow = () => {
    const [isScrollEnd, setIsScrollEnd] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isBottom =
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight;
            setIsScrollEnd(isBottom);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <StyledFixedArrow
            onClick={isScrollEnd ? scrollUpToTop : scrollDownByOneVh}
        >
            <Animate type="zoomIn">
                <StyledImage
                    isScrollEnd={isScrollEnd}
                    src={ArrowSVG}
                    alt="Descer"
                />
            </Animate>
        </StyledFixedArrow>
    );
};

export const StyledImage = styled(Image)<{ isScrollEnd: boolean }>`
    ${({ isScrollEnd }) =>
        isScrollEnd
            ? css`
                  transform: rotate(180deg);
                  transition: transform ease-in-out 0.5s;
              `
            : css`
                  transform: rotate(0deg);
                  transition: transform ease-in-out 0.5s;
              `}
`;

export const StyledFixedArrow = styled.button`
    position: absolute;
    padding: 1rem;
    bottom: 10rem;
    right: 10rem;
    aspect-ratio: 1/1;
    background-color: transparent;
    border: none;
    z-index: 100;
    scale: 0.5;

    :hover {
        cursor: pointer;
        animation: ${Animations.pulse} 2s infinite;
    }

    @media (max-width: 768px) {
        bottom: 0rem;
        right: 0rem;
        scale: 0.4;
    }
`;
