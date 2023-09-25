// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./component/Home";
import AboutUs from "./component/AboutUs";
import Projects from './component/Projects';
import ContactUs from "./component/ContactUs";



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
