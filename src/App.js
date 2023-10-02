// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./component/Home";
import AboutUs from "./component/AboutUs";
import Projects from './component/Projects';
import ContactUs from "./component/ContactUs";
import Services from "./component/Services";
import CompanyProfile from "./component/CompanyProfile";



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="/company-profile" element={<CompanyProfile/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
