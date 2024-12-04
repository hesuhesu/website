import React, { useEffect, useState, useRef } from 'react';
import PictureSlide from '../components/PictureSlide.tsx';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { glow, fadeIn, jelloHorizontal } from '../components/Animation.tsx';

const Project: React.FC = () => {
  const projectRefs = useRef<HTMLDivElement[]>([]);
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set());

  useEffect(() => {
    const refs = projectRefs.current; // refs 값을 로컬 변수로 복사
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => new Set(prev.add(index)));
          } else {
            setVisibleIndexes((prev) => {
              const updated = new Set(prev);
              updated.delete(index);
              return updated;
            });
          }
        });
      },
      { threshold: 0 }
    );
    refs.forEach((ref) => ref && observer.observe(ref)); // 로컬 변수 사용

    return () => {
      refs.forEach((ref) => ref && observer.unobserve(ref)); // 로컬 변수 사용
    };
  }, []);

  return (
    <ProjectContainer>
      <ProjectIntro>
        <h2>아래로 스크롤 해 주세요</h2>
        <p>입니다.</p>
      </ProjectIntro>
      {[
        {
          title: "My Diary",
          description: "나의 일기 앱을 Kotlin 을 사용하여 만든 toy 프로젝트 입니다.",
          link: "https://github.com/hesuhesu/MyDiary",
          picture: ["MyDiary.webp", "MyDiary2.webp", "MyDiary3.webp", "MyDiary4.webp", "MyDiary5.webp"],
        },
        {
          title: "완성도 높은 WYSIWYG Editor 구축",
          description: "Javascript-Based 문서 편집 기능과 ThreeJS 를 활용한 GLTF Editor 를 결합한 졸업 과제 프로젝트입니다.",
          link: "https://github.com/hesuhesu/SW_Project",
          picture: ["WYSIWYG_Editor.webp", "WYSIWYG_Editor2.webp"],
        },
        {
          title: "GLTF 3D Editor",
          description: "3D Editor 기능을 보강하여 코드 리팩토링 및 클라이언트 배포를 진행한 토이 프로젝트 입니다.",
          link: "https://github.com/hesuhesu/gltfeditor",
          secondLink: "https://gltfeditor.o-r.kr",
          picture: ["3D_Editor.webp", "3D_Editor2.webp"],
        },
        {
          title: "나만의 블로그 만들기",
          description: "포트폴리오 겸 직접 블로그를 제작하였습니다.",
          link: "https://github.com/hesuhesu/ReactUITester",
          picture: ["MyBlog.webp", "MyBlog2.webp"],
        },
      ].map((project, index) => (
        <ProjectDiv
          key={index}
          data-index={index}
          ref={(element) => (projectRefs.current[index] = element!)}
          className={visibleIndexes.has(index) ? "fade-in" : ""}
        >
          {index % 2 === 0 ? <>
            <PictureSlide pictures={project.picture}/>
            {/*
            <PictureDiv>
              {project.picture.map((src, idx) => (
                <img key={idx} src={src} alt="" />
              ))}
            </PictureDiv>
            */}
            <ContentDiv>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ButtonContainer>
              <button>
                <Link to={project.link} target="_blank">
                  Github
                </Link>
              </button>
              {project.secondLink && 
              <button>
                <Link to={project.secondLink} target="_blank">
                  Site Link
                </Link>
              </button>}
              </ButtonContainer>
            </ContentDiv>
          </> : <>
            <ContentDiv>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ButtonContainer>
              <button>
                <Link to={project.link} target="_blank">
                  Github
                </Link>
              </button>
              {project.secondLink && 
              <button>
                <Link to={project.secondLink} target="_blank">
                  Site Link
                </Link>
              </button>}
              </ButtonContainer>
            </ContentDiv>
            <PictureSlide pictures={project.picture}/>
            {/*
            <PictureDiv>
              {project.picture.map((src, idx) => (
                <img key={idx} src={src} alt="" />
              ))}
            </PictureDiv>
            */}
          </>}
        </ProjectDiv>
      ))}
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  height: 450vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #282c34;
  color: #282c34;
  position: relative;
  overflow: hidden;
`;

const ProjectIntro = styled.div`
    height: 50vh; 
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    h2 {
        font-size: 50px;
        color: rgba(214, 230, 245, 0.925); 
        z-index: 1; // 텍스트는 비트맵 위에 유지
    }
    p {
        font-size: 20px;
        color: rgba(214, 230, 245, 0.925); 
        z-index: 1;
    }

    @media (max-width: 768px) {
      h2 {
        font-size: 35px;
      }
      p {
        font-size: 16px;
      }
      
    }

    @media (max-width: 480px) {
      h2 {
        font-size: 28px;
      }
      p {
        font-size: 12px;
      }
    }
`

const ProjectDiv = styled.div`
  display: flex;
  height: 70vh;
  width: 70%;
  border: 5px solid rgba(214, 230, 245, 0.925);
  border-radius: 10px;
  background-color: rgba(214, 230, 245, 0.925);
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s, transform 0.5s;

  &.fade-in {
    animation: ${glow} 4s infinite, ${fadeIn} 1s ease forwards;
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1200px) {
    flex-direction: column;  // 모바일에서는 세로로 정렬
  }

`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: rgba(214, 230, 245, 0.925);

  h2 {
    font-size: 30px;
  }

  @media (max-width: 1200px) {
    width: 100%;             
    height: 50%;         
  }

`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #282c34;
    border: none;
    border-radius: 20px;
    color: rgba(214, 230, 245, 0.925);
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    
    a {
      text-decoration: none; // 밑줄 제거
      color: rgba(214, 230, 245, 0.925); // 버튼 텍스트와 동일한 색상
    }

    &:hover {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
      animation: ${jelloHorizontal} 1s ease forwards;
    }

    &:active {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
      transform: translateY(1px);
    }
  }
`;

/*
const PictureDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #282c34;
  border-radius: 10px;

  img {
    border: 2px solid rgba(214, 230, 245, 0.925);
    border-radius: 10px;
    object-fit: scale-down;
    height: 100%;
    width: 100%;
  }
`;
*/

export default Project;