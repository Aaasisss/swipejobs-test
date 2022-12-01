import { CircularProgress } from "@chakra-ui/react";
import React, { useState } from "react";
import Home from "./Home";
import useJobData from "../hooks/useJobData";
import useWorkerData from "../hooks/useWorkerData";

const App: React.FC = () => {
  const { jobs } = useJobData();
  const { worker } = useWorkerData();
  const [currentJobIndex, setCurrentJobIndex] = useState(1);

  return (
    <div>
      {jobs && worker ? (
        <Home jobDetails={jobs[currentJobIndex]} workerDetails={worker!} />
      ) : (
        <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
          <CircularProgress size={"sm"} isIndeterminate color="green.300" />
        </div>
      )}
    </div>
  );
};

export default App;
