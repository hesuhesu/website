import { keyframes } from 'styled-components';

// 자주쓰는 컬러
/*
Header 색상 : #282c34
Header 글 색상 : rgba(214, 230, 245, 0.925)

*/

// 구버전 문법 예시
/*
const focusInContractWebkit = css`
    @-webkit-keyframes focusInContract {
        0% {
            letter-spacing: 1em;
            -webkit-filter: blur(12px);
            filter: blur(12px);
            opacity: 0;
        }
        100% {
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
        }
    }
`;
*/

// 양 옆에서 텍스트 모이는 효과
export const focusInContract = keyframes`
    0% {
        letter-spacing: 0.3em;
        -webkit-filter: blur(12px);
        filter: blur(12px);
        opacity: 0;
    }
    100% {
        -webkit-filter: blur(0);
        filter: blur(0);
        opacity: 1;
    }
`;

// 통통 튀는 버튼 효과
export const jelloHorizontal = keyframes`
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }

    30% {
        -webkit-transform: scale3d(1.25, .75, 1);
        transform: scale3d(1.25, .75, 1)
    }

    40% {
        -webkit-transform: scale3d(.75, 1.25, 1);
        transform: scale3d(.75, 1.25, 1)
    }

    50% {
        -webkit-transform: scale3d(1.15, .85, 1);
        transform: scale3d(1.15, .85, 1)
    }

    65% {
        -webkit-transform: scale3d(.95, 1.05, 1);
        transform: scale3d(.95, 1.05, 1)
    }

    75% {
        -webkit-transform: scale3d(1.05, .95, 1);
        transform: scale3d(1.05, .95, 1)
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
`;

export const jelloVertical = keyframes`
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }

    30% {
        -webkit-transform: scale3d(.75, 1.25, 1);
        transform: scale3d(.75, 1.25, 1)
    }

    40% {
        -webkit-transform: scale3d(1.25, .75, 1);
        transform: scale3d(1.25, .75, 1)
    }

    50% {
        -webkit-transform: scale3d(.85, 1.15, 1);
        transform: scale3d(.85, 1.15, 1)
    }

    65% {
        -webkit-transform: scale3d(1.05, .95, 1);
        transform: scale3d(1.05, .95, 1)
    }

    75% {
        -webkit-transform: scale3d(.95, 1.05, 1);
        transform: scale3d(.95, 1.05, 1)
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1)
    }
`

export const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(214, 230, 245, 0.5), 0 0 10px rgba(214, 230, 245, 0.4);
  }
  
  12.5% {
    box-shadow: 0 0 10px rgba(214, 230, 245, 0.55), 0 0 20px rgba(214, 230, 245, 0.45);
  }

  25% {
    box-shadow: 0 0 10px rgba(214, 230, 245, 0.6), 0 0 20px rgba(214, 230, 245, 0.5);
  }

  37.5% {
    box-shadow: 0 0 10px rgba(214, 230, 245, 0.65), 0 0 20px rgba(214, 230, 245, 0.55);
  }

  50% {
    box-shadow: 0 0 10px rgba(214, 230, 245, 0.7), 0 0 20px rgba(214, 230, 245, 0.6);
  }

  62.5% {
    box-shadow: 0 0 10px rgba(214, 230, 245, 0.65), 0 0 20px rgba(214, 230, 245, 0.55);
  }

  75% {
    box-shadow: 0 0 10px rgba(214, 230, 245, 0.6), 0 0 20px rgba(214, 230, 245, 0.5);
  }

  87.5% {
    box-shadow: 0 0 10px rgba(214, 230, 245, 0.55), 0 0 20px rgba(214, 230, 245, 0.45);
  }

  100% {
    box-shadow: 0 0 5px rgba(214, 230, 245, 0.5), 0 0 10px rgba(214, 230, 245, 0.4);
  }
`;

// Header h1 반짝이는 효과
export const textFlickerInGlow = keyframes`
    0% {
        opacity: 0
    }

    10% {
        opacity: 0;
        text-shadow: none
    }

    10.1% {
        opacity: 1;
        text-shadow: none
    }

    10.2% {
        opacity: 0;
        text-shadow: none
    }

    20% {
        opacity: 0;
        text-shadow: none
    }

    20.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, .25)
    }

    20.6% {
        opacity: 0;
        text-shadow: none
    }

    30% {
        opacity: 0;
        text-shadow: none
    }

    30.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, .45), 0 0 60px rgba(255, 255, 255, .25)
    }

    30.5% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, .45), 0 0 60px rgba(255, 255, 255, .25)
    }

    30.6% {
        opacity: 0;
        text-shadow: none
    }

    45% {
        opacity: 0;
        text-shadow: none
    }

    45.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, .45), 0 0 60px rgba(255, 255, 255, .25)
    }

    50% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, .45), 0 0 60px rgba(255, 255, 255, .25)
    }

    55% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, .45), 0 0 60px rgba(255, 255, 255, .25)
    }

    55.1% {
        opacity: 0;
        text-shadow: none
    }

    57% {
        opacity: 0;
        text-shadow: none
    }

    57.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, .55), 0 0 60px rgba(255, 255, 255, .35)
    }

    60% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, .55), 0 0 60px rgba(255, 255, 255, .35)
    }

    60.1% {
        opacity: 0;
        text-shadow: none
    }

    65% {
        opacity: 0;
        text-shadow: none
    }

    65.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, .55), 0 0 60px rgba(255, 255, 255, .35), 0 0 100px rgba(255, 255, 255, .1)
    }

    75% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, .55), 0 0 60px rgba(255, 255, 255, .35), 0 0 100px rgba(255, 255, 255, .1)
    }

    75.1% {
        opacity: 0;
        text-shadow: none
    }

    77% {
        opacity: 0;
        text-shadow: none
    }

    77.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, .55), 0 0 60px rgba(255, 255, 255, .4), 0 0 110px rgba(255, 255, 255, .2), 0 0 100px rgba(255, 255, 255, .1)
    }

    85% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, .55), 0 0 60px rgba(255, 255, 255, .4), 0 0 110px rgba(255, 255, 255, .2), 0 0 100px rgba(255, 255, 255, .1)
    }

    85.1% {
        opacity: 0;
        text-shadow: none
    }

    86% {
        opacity: 0;
        text-shadow: none
    }

    86.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, .6), 0 0 60px rgba(255, 255, 255, .45), 0 0 110px rgba(255, 255, 255, .25), 0 0 100px rgba(255, 255, 255, .1)
    }

    100% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, .6), 0 0 60px rgba(255, 255, 255, .45), 0 0 110px rgba(255, 255, 255, .25), 0 0 100px rgba(255, 255, 255, .1)
    }
`;


// 진동 효과
export const vibrate1 = keyframes`
    0% {
        -webkit-transform: translate(0);
        transform: translate(0)
    }

    20% {
        -webkit-transform: translate(-2px, 2px);
        transform: translate(-2px, 2px)
    }

    40% {
        -webkit-transform: translate(-2px, -2px);
        transform: translate(-2px, -2px)
    }

    60% {
        -webkit-transform: translate(2px, 2px);
        transform: translate(2px, 2px)
    }

    80% {
        -webkit-transform: translate(2px, -2px);
        transform: translate(2px, -2px)
    }

    100% {
        -webkit-transform: translate(0);
        transform: translate(0)
    }
`;

// About introduce flip-in-hor-bottom
export const flipInHorBottom = keyframes`
    0% {
        -webkit-transform: rotateX(80deg);
        transform: rotateX(80deg);
        opacity: 0
    }

    100% {
        -webkit-transform: rotateX(0);
        transform: rotateX(0);
        opacity: 1
    }
`;

// Header h1 fadeIn
export const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

export const fadeIn2 = keyframes`
    0% {
            opacity: 0;
            transform: scale(0.5);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
`;

// Header li 애니메이션
export const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

// 배경이 위에서 아래로 흰색으로 바뀌는 애니메이션 키프레임 정의
export const slideDown = keyframes`
    0% {
        background-position: bottom; // 위쪽에서 시작
    }

    100% {
        background-position: top; // 아래쪽으로 이동하며 흰색으로 채움
    }
`;

// 프레임이 이동하는 애니메이션
export const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100%{
    opacity: 1;
    transform: translateX(0%);
  }
`;