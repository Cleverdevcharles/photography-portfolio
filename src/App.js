import React, { useEffect, useState } from "react";
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
import Aos from "aos";
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

      useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <NavBar toggle={toggle} />
      <DropDrown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} data-aos="fade-up" />
      <InfoSection {...InfoData} data-aos="zoom-in-up" />
      <Gallary photos={GallaryData} data-aos="zoom-in-down" />
      <ContactUs {...InfoData} data-aos="zoom-in-left" />
      <Developer {...InfoData} data-aos="flip-right" />
      <Footer {...InfoData} />
    </>
  );
}

export default App;
