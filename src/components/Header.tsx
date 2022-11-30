import "../styles/Home.css";
import logo from "../images/swipejobs-logo.svg";
import logoIcon from "../images/swipejobs-logo-icon.svg";
import { Image, Text } from "@chakra-ui/react";
import React from "react";
import { WorkerProps } from "../shared/WorkerPropTypes";

const Header: React.FC<WorkerProps> = ({ firstName, lastName }) => {
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
        <Text>{`${firstName} ${lastName}`}</Text>
      </div>
    </div>
  );
};

export default Header;
