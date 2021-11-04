import React, { useEffect } from "react";
import Aos from "aos";
import { Button } from "./Button";
import styled from "styled-components/macro";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 2rem;

  @media only screen and (max-width: 610px) {
    width: 800px;
    margin-left: 20px;
    padding: 0rem 9rem;
  }
  @media only screen and (max-width: 482px) {
    width: 700px;
    margin-left: 30px;
    padding: 0rem 8rem;
  }
  @media only screen and (max-width: 422px) {
    width: 700px;
    margin-left: 30px;
    padding: 0rem 10rem;
  }
  @media only screen and (max-width: 315px) {
    width: 700px;
    margin-left: 15px;
    padding: 0rem 13rem;
  }
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  margin-bottom: -100px;
  order: ${({ reverse }) => (reverse ? "2" : "1")};

  .about_us {
    margin-bottom: 5rem;
    font-size: clamp(1.5rem, 6vw, 2rem);

    @media only screen and (max-width: 610px) {
      margin-bottom: 100px;
    }
    @media only screen and (max-width: 482px) {
      margin-bottom: 300px;
    }
    @media only screen and (max-width: 315px) {
      margin-bottom: 500px;
    }
  }

  p {
    margin-bottom: 2rem;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
    @media only screen and (max-width: 610px) {
      margin-top: -500px;
    }
    @media only screen and (max-width: 482px) {
      margin-top: -300px;
    }
    @media only screen and (max-width: 315px) {
      margin-top: -500px;
    }
  }

`;

const Effect = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
};

const infoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  reverse,
  image,
}) => {
  Effect();
  return (
    <Section id="/about-us">
      <center>
        <h1
          className="about_us"
          style={{
            color: "#000",
            paddingTop: "100px",
            fontWeight: "bold",
            fontSize: "28px",
            marginBottom: "-200px",
          }}
        >
          ABOUT US
        </h1>
      </center>
      <Container>
        <ColumnLeft data-aos="fade-up">
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/our-gallary" primary="true">
            {buttonLabel}
          </Button>
        </ColumnLeft>
        <ColumnRight
          reverse={reverse}
          data-aos="zoom-in-up"
          style={{
            color: "#000",
            paddingTop: "50px",
            fontWeight: "bold",
            fontSize: "28px",
          }}
        >
          <img
            src={image}
            alt="Info"
            style={{
              color: "#000",
              paddingTop: "50px",
              fontWeight: "bold",
              fontSize: "28px",
              marginTop: "150px",
            }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default infoSection;
