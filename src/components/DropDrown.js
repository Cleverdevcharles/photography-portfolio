import React from "react";
import { menuData } from "../data/MenuData";
import { Link } from "react-scroll";
import { Button } from "./Button";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components/macro";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-column: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;
`;

const DropdownLink = styled(Link)`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000d1a;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const DropDrown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink
              to={item.link}
              onClick={toggle}
              key={index}
              activeClass="active"
              spy={true}
              smooth={true}
            >
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button
            primary="true"
            activeClass="active"
            onClick={toggle}
            spy={true}
            smooth={true}
            big="true"
            round="true"
            to="/contact-us"
          >
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default DropDrown;
