import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

type AnimateOptions = "slideInLeft" | "zoomIn" | "slideInRight";

interface AnimateProps {
    children: React.ReactNode;
    type: AnimateOptions;
}

const Animate = ({ children, type }: AnimateProps) => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const animationProps = {
        ref,
        inView,
        type,
    };

    {
        if (type === "slideInLeft")
            return (
                <StyledSlideInLeft {...animationProps}>
                    {children}
                </StyledSlideInLeft>
            );
        else if (type === "slideInRight")
            return (
                <StyledSlideInRight {...animationProps}>
                    {children}
                </StyledSlideInRight>
            );
        else {
            return <StyledZoomIn {...animationProps}>{children}</StyledZoomIn>;
        }
    }
};

const StyledSlideInLeft = styled.div<{ inView: boolean; type: AnimateOptions }>`
    ${({ inView }) => css`
        transition: all 750ms ease-in-out;
        opacity: ${inView ? "1" : "0"};
        transform: ${inView ? "translateX(0)" : "translateX(5%)"};

        @media (prefers-reduced-motion) {
            transform: translateX(0);
            opacity: 1;
        }
    `}
`;
const StyledSlideInRight = styled.div<{
    inView: boolean;
    type: AnimateOptions;
}>`
    ${({ inView }) => css`
        transition: all 750ms ease-in-out;
        opacity: ${inView ? "1" : "0"};
        transform: ${inView ? "translateX(0)" : "translateX(-5%)"};

        @media (prefers-reduced-motion) {
            transform: translateX(0);
            opacity: 1;
        }
    `}
`;

const StyledZoomIn = styled.div<{ inView: boolean; type: AnimateOptions }>`
    ${({ inView }) => css`
        transition: all 750ms ease-in-out;
        transform: ${inView ? "scale(1)" : "scale(0)"};

        @media (prefers-reduced-motion) {
            transform: scale(1);
            opacity: 1;
        }
    `}
`;

export default Animate;