import { useEffect, useState } from "react";
import { JobProps } from "../shared/JobPropTypes";

function useJobData() {
  const [jobs, setJobs] = useState<JobProps[]>();
  const [errorFromJob, setErrorFromJob] = useState<Boolean>(false);
  const [isJobLoading, setIsJobLoading] = useState<Boolean>(true);

  const WORKER_ID = "7f90df6e-b832-44e2-b624-3143d428001f";

  //worker id generally comes from auth
  const URL = `https://test.swipejobs.com/api/worker/${WORKER_ID}/matches`;

  useEffect(() => {
    fetch(URL)
      .then(async (res) => {
        const data = await res.json();
        setJobs(data);
        setIsJobLoading(false);
      })
      .catch((error) => {
        setIsJobLoading(false);
        error.log(error);
        setErrorFromJob(true);
      });
  }, [URL]);

  return { jobs, isJobLoading, errorFromJob };
}

export default useJobData;
