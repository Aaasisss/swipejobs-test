import { useEffect, useState } from "react";
import { WorkerProps } from "../shared/WorkerPropTypes";

function useWorkerData() {
  const [worker, setWorker] = useState<WorkerProps>();
  const [errorFromWorker, setErrorFromWorker] = useState<Boolean>(false);
  const [isWorkerLoading, setIsWorkerLoading] = useState<Boolean>(true);
  //worker id comes from auth
  const WORKER_ID = "7f90df6e-b832-44e2-b624-3143d428001f";
  const URL = `  https://test.swipejobs.com/api/worker/${WORKER_ID}/profile`;

  useEffect(() => {
    fetch(URL)
      .then(async (res) => {
        const json = await res.json();
        setWorker(json);
        setIsWorkerLoading(false);
      })
      .catch((error) => {
        error.console.log(error);
        setIsWorkerLoading(false);
        setErrorFromWorker(true);
      });
  }, [URL]);

  return { worker, isWorkerLoading, errorFromWorker };
}

export default useWorkerData;
