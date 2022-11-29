import { Stack } from "@chakra-ui/react";
import "../styles/GeneralInfo.css";
import ShiftDates from "./ShiftDates";
import Location from "./Location";
import Requirements from "./Requirements";
import ReportTo from "./ReportTo";
import React from "react";
import { ReportToProps, ShiftsProps } from "../shared/types";

interface Props {
  formattedAddress: string;
  milesToTravel: number;
  reportTo: ReportToProps;
  requirements: string[];
  shifts: ShiftsProps[];
}

const GeneralInfo: React.FC<Props> = ({
  formattedAddress,
  milesToTravel,
  reportTo,
  requirements,
  shifts,
}) => {
  return (
    <Stack className="generalInfo-main-container">
      <ShiftDates shifts={shifts} />
      <Location
        formattedAddress={formattedAddress}
        milesToTravel={milesToTravel}
      />
      <Requirements requirements={requirements} />
      <ReportTo name={reportTo.name} phone={reportTo.phone} />
    </Stack>
  );
};

export default GeneralInfo;
