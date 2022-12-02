import { Button } from "@chakra-ui/react";
import React from "react";
import useHandlButtonClick from "../hooks/useHandleButtonClick";
import "../styles/Buttons.css";

interface Props {
  workerId: string;
  JobId: string;
  currentJobIndex: number;
  setCurrentJobIndex: React.Dispatch<React.SetStateAction<number>>;
  totalJobs: number;
}

const Buttons: React.FC<Props> = (props) => {
  const {
    onRejectClickHandle,
    onAcceptClickHandle,
    jobAccepted,
    initialMessage,
  } = useHandlButtonClick(props);

  return (
    <div className="button-container">
      <Button
        variant={"outline"}
        className={"button-reject"}
        onClick={onRejectClickHandle}
      >
        No Thanks
      </Button>
      <Button
        variant={"outlined"}
        className={"button-accept"}
        sx={{ backgroundColor: jobAccepted && "#52b818" }}
        onClick={onAcceptClickHandle}
      >
        {initialMessage}
      </Button>
    </div>
  );
};

export default Buttons;
