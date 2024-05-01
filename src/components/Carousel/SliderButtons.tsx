import { Animate } from "components/Animate";
import styled from "styled-components";
import { useSwiper } from "swiper/react";
import ArrowSVG from "../../assets/Arrow.svg";
import Image from "next/image";

export const SliderButtons = () => {
    const swiper = useSwiper();

    return (
        <>
            <PrevButton onClick={() => swiper.slidePrev()} title="Prev">
                <Animate type="zoomIn">
                    <ArrowLeft src={ArrowSVG} alt="Anterior" />
                </Animate>
            </PrevButton>
            <NextButton onClick={() => swiper.slideNext()} title="Next">
                <Animate type="zoomIn">
                    <ArrowRight src={ArrowSVG} alt="Próximo" />
                </Animate>
            </NextButton>
        </>
    );
};

const SlideButton = styled.button`
    position: absolute;
    top: 50%;
    bottom: auto;
    transform: translateY(-20rem);
    border: 1px solid gray;
    background: white;
    padding: 1rem;
    border-radius: 5rem;
    z-index: 10;
    scale: 0.5;

    @media (max-width: 768px) {
        scale: 0.25;
    }

    :hover {
        cursor: pointer;
    }
`;

const ArrowRight = styled(Image)`
    transform: rotate(-90deg);
`;
const ArrowLeft = styled(Image)`
    transform: rotate(90deg);
`;

const PrevButton = styled(SlideButton)`
    left: 3rem;

    @media (max-width: 768px) {
        left: -2rem;
    }
`;
const NextButton = styled(SlideButton)`
    right: 3rem;

    @media (max-width: 768px) {
        right: -2rem;
    }
`;
