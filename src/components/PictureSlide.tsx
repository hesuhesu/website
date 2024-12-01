import React, { useState } from 'react';
import styled from 'styled-components';

interface PictureDivProps {
    pictures: string[];
}

const PictureSlide: React.FC<PictureDivProps> = ({ pictures }) => {
    const [slideIndex, setSlideIndex] = useState<number>(0); // 0부터 시작하는 인덱스

    const handleNext = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const handlePrev = () => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <SlideDiv>
            <img src={pictures[slideIndex]} alt={`Slide ${slideIndex}`} />
            {pictures.length > 1 && <>
                <LeftButton onClick={handlePrev}>&lt;</LeftButton>
                <RightButton onClick={handleNext}>&gt;</RightButton>
            </>}
        </SlideDiv>
    );
}

const SlideDiv = styled.div`
    position: relative;
    width:50%;
    height: 100%;
    background-color: #282c34;
    border-radius: 0.625rem; // 10px
    img {
        border-radius: 0.625rem; // 10px
        object-fit: scale-down;
        height: 100%;
        width: 100%;
    }

    @media (max-width: 1200px) {
        width: 100%;
        height: 50%;
    }
`;

const LeftButton = styled.button`
    position: absolute;
    top: 50%;
    left: 1.25rem; // 20px
    transform: translateY(-50%);
    background: #282c34;
    border: none;
    border-radius: 50%;
    padding: 0.625rem; // 10px
    cursor: pointer;
    font-size: 2rem; // 32px
    color: rgba(214, 230, 245, 0.925);

    @media (max-width: 768px) {
        left: 0.625rem; // 10px
        padding: 0.5rem; // 8px
        font-size: 1.5rem; // 24px
    }

    @media (max-width: 480px) {
        left: 0.5rem; // 8px
        padding: 0.375rem; // 6px
        font-size: 1.25rem; // 20px
    }
`;

const RightButton = styled.button`
    position: absolute;
    top: 50%;
    right: 1.25rem; // 20px
    transform: translateY(-50%);
    background: #282c34;
    border: none;
    border-radius: 50%;
    padding: 0.625rem; // 10px
    cursor: pointer;
    font-size: 2rem; // 32px
    color: rgba(255, 255, 255, 1);

    @media (max-width: 768px) {
        right: 0.625rem; // 10px
        padding: 0.5rem; // 8px
        font-size: 1.5rem; // 24px
    }

    @media (max-width: 480px) {
        right: 0.5rem; // 8px
        padding: 0.375rem; // 6px
        font-size: 1.25rem; // 20px
    }
`;

export default PictureSlide;