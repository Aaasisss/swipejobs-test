import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { SlCalender } from "react-icons/sl";
import { ShiftsProps } from "../shared/JobPropTypes";
import "../styles/GeneralInfo.css";
import { formatShiftEndDate, formatShiftStartDate } from "../utils/FormatDates";

interface Props {
  shifts: ShiftsProps[];
  timeZone: string;
}

const ShiftDates: React.FC<Props> = ({ shifts, timeZone }) => {
  return (
    <div className="generalInfo-container">
      <div className="icon-container">
        <SlCalender />
      </div>
      <div className="generalInfo-right-container">
        <Stack>
          <Text className="generalInfo-heading">Shift Dates</Text>
          {shifts.map((shift, index) => (
            <Stack key={index}>
              <Text className="shiftDates-text">
                {formatShiftStartDate(shift.startDate, timeZone)} -
                {formatShiftEndDate(shift.endDate, timeZone)}
              </Text>
            </Stack>
          ))}
        </Stack>
      </div>
      <hr />
    </div>
  );
};

export default ShiftDates;
