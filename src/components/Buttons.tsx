import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import "../styles/Buttons.css";
import { acceptJob, rejectJob } from "../utils/ButtonClickResponses";

interface Props {
  workerId: string;
  JobId: string;
  currentJobIndex: number;
  setCurrentJobIndex: React.Dispatch<React.SetStateAction<number>>;
  totalJobs: number;
}

const Buttons: React.FC<Props> = ({
  workerId,
  JobId,
  currentJobIndex,
  setCurrentJobIndex,
  totalJobs,
}) => {
  const [jobAccepted, setJobAccepted] = useState(false);
  const [jobRejected, setJobRejected] = useState(false);
  const [jobAvailable, setJobAvailable] = useState("I'll take it");

  const onAcceptClickHandle = async () => {
    const response = await acceptJob(workerId, JobId);

    if (response.success) {
      setJobAccepted(true);
      setJobRejected(false);
    } else {
      setJobAvailable("Not Available");
    }
  };

  const onRejectClickHandle = async () => {
    const nextIndex = currentJobIndex + 1;
    if (nextIndex < totalJobs) {
      setCurrentJobIndex(nextIndex);
    }

    await rejectJob(workerId, JobId).then(() => {
      setJobAccepted(false);
      setJobRejected(true);
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
        {jobAccepted ? "You took this job" : jobAvailable}
      </Button>
    </div>
  );
};

export default Buttons;
