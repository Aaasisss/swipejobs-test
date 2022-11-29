import { Stack, Text } from "@chakra-ui/react";
import "../styles/GeneralInfo.css";
import { VscTools } from "react-icons/vsc";
import React from "react";

interface Props {
  requirements: string[];
}

const Requirements: React.FC<Props> = ({ requirements }) => {
  return (
    <>
      <div className="generalInfo-container">
        <div className="icon-container">
          <VscTools />
        </div>

        <div className="generalInfo-right-container">
          <Stack>
            <Text className="generalInfo-heading">Requirements</Text>
            <Stack>
              {requirements.map((requirement, index) => {
                return (
                  <Text key={index} className="requirements-text">
                    {requirement}
                  </Text>
                );
              })}
            </Stack>
          </Stack>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Requirements;
