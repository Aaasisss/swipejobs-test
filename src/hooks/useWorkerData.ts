import { useEffect, useState } from "react";
import { WorkerProps } from "../shared/WorkerPropTypes";

function useWorkerData() {
  const [worker, setWorker] = useState<WorkerProps>();
  const [errorFromWorker, setErrorFromWorker] = useState(null);

  useEffect(() => {
    fetch(
      "https://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/profile"
    )
      .then(async (res) => {
        const json = await res.json();
        setWorker(json);
      })
      .catch((error) => {
        console.log(error);
        setErrorFromWorker(error);
      });
  }, []);

  return { worker, errorFromWorker };
}

export default useWorkerData;
