import { Button } from "@chakra-ui/react";
import React from "react";
import "../styles/Buttons.css";

const Buttons: React.FC = () => {
  return (
    <div className="button-container">
      <Button variant={"outline"} className="button-reject">
        No Thanks
      </Button>
      <Button variant={"outlined"} className="button-accept">
        I'll Take it
      </Button>
    </div>
  );
};

export default Buttons;
