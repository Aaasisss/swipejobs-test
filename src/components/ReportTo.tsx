import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import "../styles/GeneralInfo.css";
import { CgProfile } from "react-icons/cg";
import { ReportToProps } from "../shared/JobPropTypes";
import { formatPhoneNumber } from "../utils/FormatPhoneNumber";

const ReportTo: React.FC<ReportToProps> = ({ name, phone }) => {
  const formattedPhone = formatPhoneNumber(phone);

  return (
    <>
      <div className="generalInfo-container">
        <div className="icon-container">
          <CgProfile />
        </div>

        <div>
          <Stack>
            <Text className="generalInfo-heading">Report To</Text>
            <Text className="generalInfo-text">
              {name} {formattedPhone}
            </Text>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default ReportTo;
