import Info from "./components/Info";
import JobTitle from "./components/JobTitle";
import GeneralInfo from "./components/GeneralInfo";
import "./styles/Home.css";
import Buttons from "./components/Buttons";
import Image from "./components/Image";
import Header from "./components/Header";
import React from "react";
import { JobProps } from "./shared/types";
import { Box } from "@chakra-ui/react";

const Home: React.FC<JobProps> = ({
  jobTitle,
  company,
  milesToTravel,
  wagePerHourInCents,
  requirements,
  shifts,
}) => {
  return (
    <div className="App">
      <Box
        className="container"
        width={{ base: "100%", md: "700px", lg: "700px" }}
      >
        <Header />
        <div className="body">
          <div className="inner-container">
            <Image imageUrl={jobTitle.imageUrl} />
            <JobTitle jobTitle={jobTitle.name} companyName={company.name} />
            <Info
              milesToTravel={milesToTravel}
              wagePerHourInCents={wagePerHourInCents}
            />
            <GeneralInfo
              milesToTravel={milesToTravel}
              formattedAddress={company.address.formattedAddress}
              reportTo={company.reportTo}
              requirements={requirements}
              shifts={shifts}
            />
            <Buttons />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Home;
