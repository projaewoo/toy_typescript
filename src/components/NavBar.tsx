import React from "react";
import styled from "styled-components";

import { MENU } from "../utils/MENU";
import { GiHamburgerMenu as HamburgerIcon } from "react-icons/gi";

interface NavBarProps {
  setPage: any;
  sideBar: any;
  setSideBar: any;
}

const NavBar = ({ setPage, sideBar, setSideBar }: NavBarProps) => {
  return (
    <NavBarWrapper sideBar={sideBar}>
      <HamburgerIcon onClick={() => setSideBar(!sideBar)} />
      {sideBar
        ? MENU.map((menu, index) => (
            <p
              key={index}
              onClick={() =>
                setPage({
                  name: menu.name,
                  component: menu.component,
                })
              }
              style={{ cursor: "pointer" }}
            >
              {menu.name}
            </p>
          ))
        : null}
    </NavBarWrapper>
  );
};

type NavBarWrapperProps = {
  sideBar: any;
};

const NavBarWrapper = styled.div<NavBarWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props) => (props.sideBar ? "150px" : "20px")};
  padding: 20px;
  background-color: #bdbdbd;

  display: flex;
  flex-direction: column;

  & > svg {
    cursor: pointer;
  }
`;

export default NavBar;
