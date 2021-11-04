import React, { useState } from "react";
import { Link } from "react-scroll";
import styled, { css } from "styled-components/macro";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import Bars from "../images/bars.svg";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  background: transparent;
  width: 100%;
  transition: 0.5s ease-in-out;
  top: 0;
  left: 0;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBar = ({ toggle }) => {
  const [coloredNav, setColoredNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setColoredNav(true);
    } else {
      setColoredNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Nav
      style={
        coloredNav
          ? { backgroundColor: "#000", boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)" }
          : null
      }
    >
      <Logo to="/">
        <b>DONPHOTOS</b>
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks
            to={item.link}
            key={index}
            activeClass="active"
            spy={true}
            smooth={true}
          >
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button
          to="/contact-us"
          activeClass="active"
          spy={true}
          smooth={true}
          primary="true"
          style={coloredNav ? { backgroundColor: "#fff", color: "#000" } : null}
        >
          Contact Us
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default NavBar;
