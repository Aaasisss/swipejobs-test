import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { SlCalender } from "react-icons/sl";
import { ShiftsProps } from "../shared/types";
import dayjs from "dayjs";
import "../styles/GeneralInfo.css";

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
            const start_date = dayjs(shift.startDate)
              .format("MMM D, ddd, h:mm a")
              .toUpperCase();

            const end_date = dayjs(shift.endDate).format("h:mm A Z");

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
