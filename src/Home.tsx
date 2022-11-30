import Info from "./components/Info";
import JobTitle from "./components/JobTitle";
import GeneralInfo from "./components/GeneralInfo";
import "./styles/Home.css";
import Buttons from "./components/Buttons";
import Image from "./components/Image";
import Header from "./components/Header";
import React from "react";
import { JobProps } from "./shared/JobPropTypes";
import { Box } from "@chakra-ui/react";
import { WorkerProps } from "./shared/WorkerPropTypes";
import { workerData } from "./demoData";

interface Props {
  jobDetails: JobProps;
  workerDetails: WorkerProps;
}

const Home: React.FC<Props> = ({ jobDetails, workerDetails }) => {
  return (
    <div className="App">
      <Box
        className="container"
        width={{ base: "100%", md: "600px", lg: "600px" }}
      >
        <Header {...workerData} />
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
            />
            <Buttons
              workerId={workerDetails.workerId}
              JobId={jobDetails.jobId}
            />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Home;
