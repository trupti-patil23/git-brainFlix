import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./../src/components/Header/Header.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import UploadVideoPage from "./pages/UploadVideoPage/UploadVideoPage.jsx";

/**
 * This is Parent Component for BrainFlix site, 
 * Calls "Header" component (Header will be populated for all components 
 *              mentioned in <Route> tag
 * Calss <HomePage> component
 * @returns 
 * 
 */
function App() {  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/videos/:selectedVideoId" element={<HomePage/>} />
        <Route path="/upload" element={<UploadVideoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
