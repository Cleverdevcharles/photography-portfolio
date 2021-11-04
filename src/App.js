import React, { useState } from "react";
import ContactUs from "./components/ContactUs";
import DropDrown from "./components/DropDrown";
import Hero from "./components/Hero";
import InfoSection from "./components/infoSection";
import NavBar from "./components/NavBar";
import { InfoData } from "./data/InfoData";
import { GallaryData } from "./data/GallaryData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./GlobalStyles";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import Gallary from "./components/Gallary";
import Footer from "./components/Footer";
import Developer from "./components/Developer";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <NavBar toggle={toggle} />
      <DropDrown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData}  />
      <Gallary photos={GallaryData} data-aos="zoom-in-down" />
      <ContactUs {...InfoData} />
      <Developer {...InfoData} />
      <Footer {...InfoData} />
    </>
  );
};

export default App;
