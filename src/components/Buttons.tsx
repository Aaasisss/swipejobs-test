import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import "../styles/Buttons.css";

interface Props {
  workerId: string;
  JobId: string;
}

const Buttons: React.FC<Props> = ({ workerId, JobId }) => {
  const [jobAccepted, setJobAccepted] = useState(false);
  const [jobRejected, setJobRejected] = useState(false);

  const onRejectClickHandle = () => {
    fetch(
      `https://test.swipejobs.com/api/worker/${workerId}/job/${JobId}/reject`
    )
      .then((res) => {
        setJobRejected(true);
        setJobAccepted(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onAcceptClickHandle = () => {
    fetch(
      `https://test.swipejobs.com/api/worker/${workerId}/job/${JobId}/accept`
    )
      .then((res) => {
        setJobAccepted(true);
        setJobRejected(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="button-container">
      <Button
        variant={"outline"}
        className={"button-reject"}
        onClick={onRejectClickHandle}
      >
        {jobRejected ? "Rejected" : "No Thanks"}
      </Button>
      <Button
        variant={"outlined"}
        className={"button-accept"}
        sx={{ backgroundColor: jobAccepted && "#52b818" }}
        onClick={onAcceptClickHandle}
      >
        {jobAccepted ? "You took this job" : "I'll Take it"}
      </Button>
    </div>
  );
};

export default Buttons;
