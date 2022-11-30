import { CircularProgress } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import { JobProps } from "./shared/JobPropTypes";
import { WorkerProps } from "./shared/WorkerPropTypes";

const App: React.FC = () => {
  const [job, setJobs] = useState<JobProps>();
  const [worker, setWorker] = useState<WorkerProps>();

  useEffect(() => {
    async function fetchJobData() {
      await fetch(
        "https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/matches"
      )
        .then(async (res) => {
          const json = await res.json();
          setJobs(json[1]);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    async function fetchWorkerData() {
      await fetch(
        "https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/profile"
      )
        .then(async (res) => {
          const json = await res.json();
          setWorker(json);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchJobData();
    fetchWorkerData();
  }, []);

  return (
    <div>
      {job && worker ? (
        <Home jobDetails={job!} workerDetails={worker!} />
      ) : (
        <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
          <CircularProgress size={"sm"} isIndeterminate color="green.300" />
        </div>
      )}
    </div>
  );
};

export default App;
