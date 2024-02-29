import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./../src/components/Header/Header.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
