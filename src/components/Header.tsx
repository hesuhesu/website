import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import { textFlickerInGlow, fadeInUp, fadeIn } from './Animation.tsx';

const Header: React.FC = () => {
    const location = useLocation();

    // 경로에 따라 h1 텍스트 설정
    const pageTitle = (() => {
        switch (location.pathname) {
            case '/about':
                return 'About';
            case '/project':
                return 'Project';
            case '/diary':
                return 'Diary';
            case '/quilleditor':
                return 'Quill Editor';
            default:
                if (location.pathname.startsWith('/diary_detail')) {
                    return 'Welcome to My Blog'; // diary_detail 경로일 때
                }
                return 'Portfolio';
        }
    })();

    return (
        <HeaderContainer>
            {pageTitle === "Project" ? <ProjectHeader>{pageTitle}</ProjectHeader> : <HeaderOne>{pageTitle}</HeaderOne>}
                <NavList>
                    <li><StyledLink to="/">Home</StyledLink></li>
                    <li><StyledLink to="/about">About</StyledLink></li>
                    <li><StyledLink to="/project">Project</StyledLink></li>
                    <li><StyledLink to="/diary">Diary</StyledLink></li>
                </NavList>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    background-color: #282c34;
    color: rgba(214, 230, 245, 0.925);
    padding: 0.625rem; // 10px
    text-align: center;

    @media (max-width: 1200px) {
        padding: 0.5625rem; /* 9px */
    }

    @media (max-width: 480px) {
        padding: 0.5rem; // 8px
    }
`;

const HeaderOne = styled.h1`
    font-size: 6.25rem; // 100px
    animation: ${fadeIn} 0.7s ease forwards;
    opacity: 0;

    @media (max-width: 1200px) {
        font-size: 5.3125rem; // 85px
    }

    @media (max-width: 768px) {
        font-size: 4.375rem; // 70px
    }

    @media (max-width: 480px) {
        font-size: 3.75rem; // 60px
    }

    @media (max-width: 344px) {
        font-size: 3.375rem; // 54px
    }
`;

const ProjectHeader = styled.h1`
    font-size: 6.25rem; // 100px
    animation: ${textFlickerInGlow} 2s ease forwards;

    @media (max-width: 1200px) {
        font-size: 5.3125rem; // 85px
    }

    @media (max-width: 768px) {
        font-size: 4.375rem; // 70px
    }

    @media (max-width: 480px) {
        font-size: 3.75rem; // 60px
    }

    @media (max-width: 344px) {
        font-size: 3.375rem; // 54px
    }
`;

const NavList = styled.ul`
    list-style-type: none;
    padding: 0;

    li {
        display: inline-block; // inline-block으로 변경하여 transform 효과 적용
        margin: 0 1rem; // 0 16px
        opacity: 0; // 기본적으로 숨김
        transform: translateY(1.25rem); // 20px
        animation: ${fadeInUp} 0.5s forwards;

        // 순서에 따른 지연
        &:nth-child(1) {
            animation-delay: 0.1s;
        }
        &:nth-child(2) {
            animation-delay: 0.2s;
        }
        &:nth-child(3) {
            animation-delay: 0.3s;
        }
        &:nth-child(4) {
            animation-delay: 0.4s;
        }
    }

    @media (max-width: 1200px) {
        li {
            margin: 0 0.875rem; // 0 14px 
        }
    }

    @media (max-width: 768px) {
        li {
            margin: 0 0.625rem; // 0 10px
            font-size: 0.875rem; // 14px 
        }
    }

    @media (max-width: 480px) {
        li {
            margin: 0 0.375rem; // 0 6px
            font-size: 0.75rem; // 12px
        }
    }

    @media (max-width: 344px) {
        li {
            margin: 0 0.25rem; // 0 4px
            font-size: 0.625rem; // 10px 
        }
    }
`;

const StyledLink = styled(Link)`
    color: rgba(214, 230, 245, 0.925);
    text-decoration: none;
    display: inline-block; // inline-block으로 변경하여 transform 효과 적용
    transition: transform 0.3s ease; // 부드러운 전환 효과 추가

    &:hover {
        transform: translateY(-0.25rem); // 4px
    }

    @media (max-width: 768px) {
        font-size: 0.875rem; // 14px
    }

    @media (max-width: 480px) {
        font-size: 0.75rem; // 12px
    }

    @media (max-width: 344px) {
        font-size: 0.625rem; // 10px 
    }
`;

export default Header;