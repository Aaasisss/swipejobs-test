import { useEffect, useState } from "react";
import { JobProps } from "../shared/JobPropTypes";

function useJobData() {
  const [jobs, setJobs] = useState<JobProps[]>();
  const [errorFromJob, setErrorFromJob] = useState(null);

  useEffect(() => {
    fetch(
      "https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/matches"
    )
      .then(async (res) => {
        const data = await res.json();
        setJobs(data);
      })
      .catch((error) => {
        error.log(error);
        setErrorFromJob(error);
      });
  }, []);

  return { jobs, errorFromJob };
}

export default useJobData;
