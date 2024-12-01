import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize';
import { ImageDrop } from "quill-image-drop-module";
import katex from 'katex';
import QuillImageDropAndPaste from 'quill-image-drop-and-paste'
import 'katex/dist/katex.min.css'; // formular 활성화
import 'react-quill/dist/quill.snow.css'; // Quill snow스타일 시트 불러오기

declare global {
    interface Window {
        katex: typeof katex;
    }
}
window.katex = katex;

// Register Modules
Quill.register("modules/imageDrop", ImageDrop);
Quill.register('modules/imageDropAndPaste', QuillImageDropAndPaste);
Quill.register('modules/ImageResize', ImageResize);

// Font Size
const Size = Quill.import("attributors/style/size");
Size.whitelist = ["8px", "10px", "12px",
    "14px", "20px", "24px", "30px", "36px", "48px",
    "60px", "72px", "84px", "96px", "120px"];
Quill.register(Size, true);

// Add New Font
const Font = Quill.import("attributors/class/font");
Font.whitelist = ["arial", "buri", "gangwon", "Quill", "serif", "monospace", "끄트머리체", "할아버지의나눔", "나눔고딕", "궁서체", "굴림체", "바탕체", "돋움체"];
Quill.register(Font, true);

// Change Align & Icon 
const Align = ReactQuill.Quill.import("formats/align");
Align.whitelist = ["left", "center", "right", "justify"];
const Icons = ReactQuill.Quill.import("ui/icons");
Icons.align["left"] = Icons.align[""];

export const formats = [
    "header", "font", "size", "bold", "italic", "underline", "align", "strike", "script", "blockquote", "background", "list", "bullet", "indent",
    "link", "image", "video", "color", "code-block", "formula", "direction"
];


const CustomUndo:React.FC = () => (
    <svg viewBox="0 0 18 18">
        <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
        <path
            className="ql-stroke"
            d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
        />
    </svg>
);
const CustomRedo:React.FC = () => (
    <svg viewBox="0 0 18 18">
        <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
        <path
            className="ql-stroke"
            d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
        />
    </svg>
);

const CustomHeart:React.FC = () => {
    return <span>♥</span>;
}


export function undoChange() {
    this.quill.history.undo();
}
export function redoChange() {
    this.quill.history.redo();
}

export function insertHeart() {
    const cursorPosition = this.quill.getSelection().index;
    this.quill.insertText(cursorPosition, "♥");
    this.quill.setSelection(cursorPosition + 1);
}

// ToolBar Custom
const EditorToolBar : React.FC = () => {
    return (
        <div id="toolbar">
                <span className="ql-formats">
                    <select className="ql-font" defaultValue="arial" title="서체 변경">
                        <option value="arial">Arial</option>
                        <option value="나눔고딕">나눔고딕</option>
                        <option value="궁서체">궁서체</option>
                        <option value="굴림체">굴림체</option>
                        <option value="바탕체">바탕체</option>
                        <option value="바탕체">돋움체</option>
                        <option value="serif">serif</option>
                        <option value="monospace">monospace</option>
                        <option value="Quill">Quill</option>
                        <option value="buri">부리</option>
                        <option value="gangwon">강원</option>
                        <option value="끄트머리체">끄트머리체</option>
                        <option value="할아버지의나눔">할아버지의나눔</option>
                    </select>
                    <select className="ql-size" defaultValue="medium" title="글자 크기 변경">
                        <option value="8px">8px</option>
                        <option value="10px">10px</option>
                        <option value="12px">12px</option>
                        <option value="14px">14px</option>
                        <option value="20px">20px</option>
                        <option value="24px">24px</option>
                        <option value="30px">30px</option>
                        <option value="36px">36px</option>
                        <option value="48px">48px</option>
                        <option value="60px">60px</option>
                        <option value="72px">72px</option>
                        <option value="84px">84px</option>
                        <option value="96px">96px</option>
                        <option value="120px">120px</option>
                    </select>
                    <select className="ql-header" defaultValue="3" title="문단 서식 변경">
                        <option value="1">h1</option>
                        <option value="2">h2</option>
                        <option value="3">h3</option>
                        <option value="4">h4</option>
                        <option value="5">h5</option>
                        <option value="6">h6</option>
                    </select>
                </span>
                <span className="ql-formats">
                    <button className="ql-bold" title="굵기" />
                    <button className="ql-italic" title="기울이기" />
                    <button className="ql-underline" title="밑줄" />
                    <button className="ql-strike" title="취소선" />
                </span>
                <span className="ql-formats">
                    <button className="ql-list" value="ordered" title="숫자 목록" />
                    <button className="ql-list" value="bullet" title="기호 목록" />
                    <button className="ql-indent" value="-1" title="왼쪽 이동" />
                    <button className="ql-indent" value="+1" title="오른쪽 이동" />
                </span>
                <span className="ql-formats">
                    <button className="ql-script" value="super" title="위 첨자" />
                    <button className="ql-script" value="sub" title="아래 첨자" />
                    <button className="ql-blockquote" title="단락 들여쓰기" />
                    <button className="ql-direction" value="rtl" title="한 번에 정렬" />
                </span>
                <span className="ql-formats">
                    <select className="ql-align" defaultValue="justify" title="정렬" />
                    <select className="ql-color" title="글자색 변경" />
                    <select className="ql-background" title="배경색 변경" />
                </span>
                <span className="ql-formats">
                    <button className="ql-link" title="링크 삽입" />
                    <button className="ql-image" title="사진 추가" />
                    <button className="ql-video" title="비디오 추가" />
                </span>
                <span className="ql-formats">
                    <button className="ql-formula" title="수식 추가" />
                    <button className="ql-code-block" title="문장 블록" />
                    <button className="ql-clean" title="초기화" />
                </span>
                <span className="ql-formats">
                    <button className="ql-undo" title="뒤로 되돌리기">
                        <CustomUndo />
                    </button>
                    <button className="ql-redo" title="앞으로 복구하기">
                        <CustomRedo />
                    </button>
                    <button className="ql-insertHeart" title="heart">
                        <CustomHeart />
                    </button>
                </span>
            </div>
    )
}

export default EditorToolBar;