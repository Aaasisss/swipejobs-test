import React from "react";
import Home from "./Home";
import useJobData from "../hooks/useJobData";
import useWorkerData from "../hooks/useWorkerData";
import Error from "../components/Error";
import Loading from "../components/Loading";

const App: React.FC = () => {
  const { jobs, isJobLoading, errorFromJob } = useJobData();
  const { worker, isWorkerLoading, errorFromWorker } = useWorkerData();

  return (
    <div>
      {jobs && worker && <Home jobs={jobs} workerDetails={worker} />}
      {(isJobLoading || isWorkerLoading) && <Loading />}
      {(errorFromJob || errorFromWorker) && <Error />}
    </div>
  );
};

export default App;
