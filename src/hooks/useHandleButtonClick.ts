import { useState } from "react";
import { acceptJob, rejectJob } from "../utils/ButtonClickResponses";

interface Props {
  workerId: string;
  JobId: string;
  currentJobIndex: number;
  setCurrentJobIndex: React.Dispatch<React.SetStateAction<number>>;
  totalJobs: number;
}
const useHandlButtonClick = ({
  workerId,
  JobId,
  currentJobIndex,
  setCurrentJobIndex,
  totalJobs,
}: Props) => {
  const [jobAccepted, setJobAccepted] = useState<Boolean>();
  const [initialMessage, setInitialMessage] = useState("I'll take it");

  const onAcceptClickHandle = async () => {
    const response = await acceptJob(workerId, JobId);

    if (response.success) {
      setJobAccepted(true);
      setInitialMessage("Job Accepted");
    } else {
      setInitialMessage("Not Available");
    }
  };

  const onRejectClickHandle = async () => {
    //go to next job
    const nextJobIndex = currentJobIndex + 1;
    if (nextJobIndex < totalJobs) {
      setCurrentJobIndex(nextJobIndex);
    }

    await rejectJob(workerId, JobId);
  };

  return {
    onRejectClickHandle,
    onAcceptClickHandle,
    jobAccepted,
    initialMessage,
  };
};

export default useHandlButtonClick;
