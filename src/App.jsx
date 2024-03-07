import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Login from "./components/Login/Login";
// import Actual from "./components/Actualiter/Actualiter";
import Cours from "./components/Cours/Cours";
import Comune from "./components/Communeaute/Comune";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Actualiter from "./components/Actualiter/Actualiter";
import { footerAPI } from "./components/Communeaute/data/travigodata";
import { Footer } from "./components/Communeaute/components";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      offset: 100,
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Actualiter" element={<Actualiter />} />
          <Route path="/cours" element={<Cours />} />
          <Route path="/commune" element={<Comune />} />
        </Routes>
      </Router>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer footerAPI={footerAPI} />
    </div>
  );
};

export default App;
