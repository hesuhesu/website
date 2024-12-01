import React from 'react';
import styled from 'styled-components';
import { focusInContract, fadeIn } from '../components/Animation.tsx';

const Home: React.FC = () => {
    return (
        <HomeContainer>
            <FirstHome>
                <h2>Future Possibility</h2>
                <strong>성장, 노력, 끈기</strong>
                <p>Frontend 개발자 은희수입니다!</p>
            </FirstHome>
            <SecondHome>
                <p>제 2 화면입니다.</p>
            </SecondHome>
            <ThirdHome>
                <p>제 3 화면입니다.</p>
            </ThirdHome>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #282c34;
    height: 300vh;
    background-color : rgba(214, 230, 245, 0.925);
`;

const FirstHome = styled.div`
    height: 100vh;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-size:60px;
        animation: ${focusInContract} 1s ease forwards;
    }
    strong {
        animation: ${fadeIn} 2s ease forwards;
    }
    p {
        font-size:30px;
        animation: ${fadeIn} 3s ease forwards;
    }

    @media (max-width: 768px) {
        h2 {
            font-size:48px;
        }
        p {
            font-size:24px;
        }
    }

    @media (max-width: 480px) {
        h2 {
            font-size:32px;
        }
        p {
            font-size:16px;
        }
    }
`;

const SecondHome = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        font-size:30px;
    }

    @media (max-width: 768px) {
        p {
            font-size:24px;
        }
    }

    @media (max-width: 480px) {
        p {
            font-size:18px;
        }
    }
`;

const ThirdHome = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        font-size:30px;
    }

    @media (max-width: 768px) {
        p {
            font-size:24px;
        }
    }

    @media (max-width: 480px) {
        p {
            font-size:18px;
        }
    }
`;

export default Home