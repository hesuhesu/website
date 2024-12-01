import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { vibrate1 } from '../components/Animation.tsx';
import { authCheck } from '../utils/authCheck.tsx';
import { errorMessage, successMessage } from '../utils/SweetAlertEvent.tsx';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill snow스타일 시트 불러오기
import '../scss/QuillEditor.scss';

const HOST = process.env.REACT_APP_HOST;
const PORT = process.env.REACT_APP_PORT;

interface Data {
    title: string;
    content: string;
    realContent: string;
    category: string;
    imgData: string[];
    createdAt: string;
}

const DiaryDetail: React.FC = () => {
    const params = useParams()._id
    const [admin, setAdmin]= useState<Number>(0);
    const navigate = useNavigate();
    const [data, setData] = useState<Data>({
        title: '',
        content: '',
        realContent: '',
        category: '',
        imgData: [],
        createdAt: ''
    });

    useEffect(() => {
        axios.get(`${HOST}:${PORT}/diary/read`, {
            params: { _id: params }
        }).then((response) => {
            setData(response.data.list);
            if (authCheck() === 0){
                return;
            }
            setAdmin(1);
        }).catch((error) => { console.error(error); });
    }, [params]);

    const modules = {
        toolbar: false, // toolbar 숨기기
    };

    const handleDelete = () => {
        if (data.imgData.length > 0) {
            axios.delete(`${HOST}:${PORT}/delete_files`, {
              params: {
                imgData: data.imgData
              }
            }).then((response) => { }).catch((error) => { errorMessage("삭제 실패"); })
          }
          axios.delete(`${HOST}:${PORT}/diary/delete`, {
            params: { _id: params }
          }).then((response) => {
            successMessage("게시물이 삭제되었습니다!");
            navigate('/diary');
          }).catch((error) => { errorMessage("삭제 실패"); })
    }

    return (
        <ReactQuillContainer>
            <HeaderOne>[{data.category}] {data.title}</HeaderOne>
            <HeaderTwo>작성 일시 : {data.createdAt}</HeaderTwo>
            <ButtonContainer>
                <button>댓글 달기</button>
                <button onClick={() => navigate("/diary")}>돌아가기</button>
                {admin === 1 && <>
                    <button onClick={() => navigate(`/quilleditor_update/${params}`, { state: data })}>수정하기</button>
                    <button onClick={handleDelete}>삭제하기</button>
                </>}
            </ButtonContainer>
            <ReactQuill
                theme="snow"// 테마 설정 (여기서는 snow를 사용)
                value={data.realContent}
                readOnly={true} // 읽기 전용 모드
                modules={modules}
            />
        </ReactQuillContainer>
    )
}

const ReactQuillContainer = styled.div`
    overflow: hidden; /* 스크롤바 숨기기 */
    background-color: rgba(214, 230, 245, 0.925);
    
    button {
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px 20px;
        font-size: 16px;
        background-color: #282c34;
        border: none;
        border-radius: 20px;
        color: white;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

        &:hover {
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
            animation: ${vibrate1} 0.3s ease infinite;
        }

        &:active {
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
            transform: translateY(1px);
        }
    }
`;

const HeaderOne = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 7vh;
    color: white;
    background-color: #282c34;
    padding: 20px 40px;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    border: 2px solid rgba(214, 230, 245, 0.925); 
    

    &:hover {
        background-color: #3a3f47;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); 
        transform: translateY(-2px); 
    }
`;

const HeaderTwo = styled.h2`
display:flex;
justify-content: right;
font-size: 20px;
color: #282c34;
`;

const ButtonContainer = styled.div`
display:flex;
justify-content: right;
`;

export default DiaryDetail;