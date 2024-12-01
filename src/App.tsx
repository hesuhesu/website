import React from 'react';
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./routes/Home.tsx";
import About from "./routes/About.tsx";
import Project from "./routes/Project.tsx";
import Diary from "./routes/Diary.tsx";
import DiaryDetail from './routes/DiaryDetail.tsx';
import QuillEditor from "./routes/QuillEditor.tsx";
import QuillEditorUpdate from "./routes/QuillEditorUpdate.tsx";
import AuthPage from "./routes/AuthPage.tsx";
import PrivateRoute from './utils/PrivateRoute.tsx';

// npm install axios sweetalert2 react-paginate react-router-dom
// npm install katex quill-image-resize quill-image-drop-module quill-image-drop-and-paste --save
// npm install styled-components three babel-plugin-styled-components

const Layout: React.FC = () => {
  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  )
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/diary" element={<Diary />} />
            <Route path = "/diary_detail/:_id" element = {<DiaryDetail/>}/>
            <Route element={<PrivateRoute/>}>
              <Route path="/quilleditor" element={<QuillEditor />} />
              <Route path="/quilleditor_update/:_id" element={<QuillEditorUpdate />} />
            </Route>
          </Route>
          <Route path="/authpage" element={<AuthPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;