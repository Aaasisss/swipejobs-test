export async function acceptJob(workerId: string, JobId: string) {
  const url = `https://test.swipejobs.com/api/worker/${workerId}/job/${JobId}/accept`;

  const response = await fetch(url)
    .then(async (res) => {
      const data = await res.json();
      return data;
    })
    .catch((error) => {
      console.error(error);
    });

  return response;
}

export async function rejectJob(workerId: string, JobId: string) {
  const url = `https://test.swipejobs.com/api/worker/${workerId}/job/${JobId}/reject`;

  const response = await fetch(url)
    .then(async (res) => {
      const data = await res.json();
      return data;
    })
    .catch((error) => {
      console.error(error);
    });

  return response;
}
