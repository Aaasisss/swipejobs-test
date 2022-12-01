import React from "react";
import { Stack, Text, Tooltip } from "@chakra-ui/react";
import "../styles/GeneralInfo.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";

interface Props {
  formattedAddress: string;
  milesToTravel: number;
}

const Location: React.FC<Props> = ({ formattedAddress, milesToTravel }) => {
  return (
    <>
      <div className="generalInfo-container">
        <div className="icon-container">
          <HiOutlineLocationMarker />
        </div>

        <div className="generalInfo-right-container">
          <Stack>
            <Text className="generalInfo-heading">Location</Text>
            <Text className="location-text">{formattedAddress}</Text>
            <Text sx={{ fontSize: "1rem" }}>
              {milesToTravel} miles fron your job search location
            </Text>
          </Stack>
        </div>
        <Tooltip label="View on maps">
          <a
            className="icon-container"
            href={`https://www.google.com.au/maps/place/${formattedAddress}`}
          >
            <BsChevronRight />
          </a>
        </Tooltip>
      </div>
      <hr />
    </>
  );
};

export default Location;
