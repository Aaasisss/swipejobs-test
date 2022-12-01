import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { SlCalender } from "react-icons/sl";
import { ShiftsProps } from "../shared/JobPropTypes";
import "../styles/GeneralInfo.css";
import {
  convert_shift_end_date,
  convert_shift_start_date,
} from "../utils/ConvertDates";

interface Props {
  shifts: ShiftsProps[];
}

const ShiftDates: React.FC<Props> = ({ shifts }) => {
  return (
    <div className="generalInfo-container">
      <div className="icon-container">
        <SlCalender />
      </div>
      <div className="generalInfo-right-container">
        <Stack>
          <Text className="generalInfo-heading">Shift Dates</Text>

          {shifts.map((shift, index) => {
            //format dates
            const start_date = convert_shift_start_date(shift.startDate);
            const end_date = convert_shift_end_date(shift.endDate);

            return (
              <Stack key={index}>
                <Text className="shiftDates-text">
                  {start_date} - {end_date}
                </Text>
              </Stack>
            );
          })}
        </Stack>
      </div>
      <hr />
    </div>
  );
};

export default ShiftDates;
