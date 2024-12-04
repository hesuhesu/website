import React from 'react';
import styled from 'styled-components';
import { flipInHorBottom } from '../components/Animation.tsx';

const About: React.FC = () => {
    return (
        <AboutContainer>
            <IntroduceContainer>
                <img src="profile.webp" alt="Description" />
                <h2>은희수</h2>
                <DescriptionContainer>
                    <dt>생년월일</dt>
                    <dd>1999.10.30</dd>

                    <dt>학력</dt>
                    <dd>금성고등학교 (2015.03 ~ 2018.02)</dd>
                    <dd>동아대학교 컴퓨터 공학과 (2018.03 ~ 2025.02)</dd>

                    <dt>병역</dt>
                    <dd>육군 만기 전역 (2019.08 ~ 2021.03)</dd>

                    <dt>취미</dt>
                    <dd>운동, 피아노</dd>
                </DescriptionContainer>
            </IntroduceContainer>
        </AboutContainer>
    );
}

const AboutContainer = styled.div`
    height: 100vh;
    display: flex;
    padding: 1rem; // 16px
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    color: rgba(214, 230, 245, 0.925);
    background-color: #282c34;

    @media (max-width: 1200px) {
        padding: 0.875rem; // 14px
        height: 90vh;
    }

    @media (max-width: 768px) {
        padding: 0.625rem; // 10px
        height: 85vh;
    }

    @media (max-width: 480px) {
        padding: 0.375rem; // 6px
    }

    @media (max-width: 344px) {
        padding: 0.25rem; // 4px 
    }
`;

const IntroduceContainer = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    background-color: #282c34;
    border: 0.3125rem solid rgba(214, 230, 245, 0.925); // 5px
    border-radius: 0.625rem; // 10px
    overflow: hidden;
    height: 90%;
    width: 40%;
    animation: ${flipInHorBottom} 0.5s ease forwards;

    img {
        max-width: 100%;
        height: 30%;
        border-radius: 0.625rem; // 10px
    }

    h2 {
        font-size: 3rem; // 48px
    }

    @media (max-width: 1200px) {
        width: 70%;
        height: 80%;

        h2 {
            font-size: 2.75rem; // 44px
        }

        img {
            height: 30%;
        }
    }

    @media (max-width: 768px) {
        width: 90%;
        height: 70%;
        h2 {
            font-size: 2.5rem; // 40px
        }

        img {
            height: 25%;
        }
    }

    @media (max-width: 480px) {
        height: 60%;

        h2 {
            font-size: 2.25rem; // 36px
        }

        img {
            height: 22.5%;
        }
    }

    @media (max-width: 344px) {
        h2 {
            font-size: 2rem; // 32px
        }
    }
`;


const DescriptionContainer = styled.dl`
    dt {
        margin-top: 1.25rem; // 20px
        margin-bottom: 1.25rem; // 20px
        position: relative;

        &::after {
            content: "";
            display: block;
            width: 100%;
            height: 0.25rem; // 4px
            background: linear-gradient(to right, 
                rgba(214, 230, 245, 0.925), 
                #777, 
                #282c34); /* 그라데이션 색상 */
            position: absolute;
            bottom: -1vh;
        }
    }

    dd {
        margin-top: 0.625rem; // 10px
    }

    @media (max-width: 1200px) {
        dt {
            &::after {
                height: 0.125rem; // 2px
            }
        }
    }

    @media (max-width: 768px) {
        dt {
            font-size: 0.875rem; // 14px
        }

        dd {
            font-size: 0.875rem; // 14px
        }
    }

    @media (max-width: 480px) {
        dt {
            font-size: 0.75rem; // 12px
        }

        dd {
            font-size: 0.75rem; // 12px
        }
    }

    @media (max-width: 344px) {
        dt {
            font-size: 0.625rem; // 10px 
        }

        dd {
            font-size: 0.625rem; // 10px 
        }
    }
`;

export default About;