import "../styles/Home.css";
import logo from "../images/swipejobs-logo.svg";
import logoIcon from "../images/swipejobs-logo-icon.svg";
import { Image, Text } from "@chakra-ui/react";
import React from "react";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div style={{ display: "flex", gap: "10px" }}>
        <Image
          className="App-logo"
          height={"50px"}
          src={logoIcon}
          alignSelf="center"
          alt="logo icon"
        />
        <Image height={"100px"} width={"200px"} src={logo} alt="logo" />
      </div>
      <div className="header-text">
        <Text>Jim Ross</Text>
      </div>
    </div>
  );
};

export default Header;
