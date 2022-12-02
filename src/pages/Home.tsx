import Info from "../components/Info";
import JobTitle from "../components/JobTitle";
import GeneralInfo from "../components/GeneralInfo";
import "../styles/Home.css";
import Buttons from "../components/Buttons";
import Image from "../components/Image";
import Header from "../components/Header";
import React, { useState } from "react";
import { JobProps } from "../shared/JobPropTypes";
import { Box } from "@chakra-ui/react";
import { WorkerProps } from "../shared/WorkerPropTypes";

interface Props {
  jobs: JobProps[];
  workerDetails: WorkerProps;
}

const Home: React.FC<Props> = ({ jobs, workerDetails }) => {
  const totalJobs = jobs.length;
  const [currentJobIndex, setCurrentJobIndex] = useState<number>(0);
  const jobDetails = jobs[currentJobIndex];

  return (
    <div className="App">
      <Box
        className="container"
        width={{ base: "100%", md: "600px", lg: "600px" }}
      >
        <Header {...workerDetails} />
        <div className="body">
          <div className="inner-container">
            <Image imageUrl={jobDetails.jobTitle.imageUrl} />
            <JobTitle
              jobTitle={jobDetails.jobTitle.name}
              companyName={jobDetails.company.name}
            />
            <Info
              milesToTravel={jobDetails.milesToTravel}
              wagePerHourInCents={jobDetails.wagePerHourInCents}
            />
            <GeneralInfo
              milesToTravel={jobDetails.milesToTravel}
              formattedAddress={jobDetails.company.address.formattedAddress}
              reportTo={jobDetails.company.reportTo}
              requirements={jobDetails.requirements}
              shifts={jobDetails.shifts}
              timeZone={jobDetails.company.address.zoneId}
            />
            <Buttons
              workerId={workerDetails.workerId}
              JobId={jobDetails.jobId}
              currentJobIndex={currentJobIndex}
              setCurrentJobIndex={setCurrentJobIndex}
              totalJobs={totalJobs}
            />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Home;
