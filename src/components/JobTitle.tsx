import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  jobTitle: string;
  companyName: string;
}

const JobTitle: React.FC<Props> = ({ jobTitle, companyName }) => {
  return (
    <Box m={"10px 25px"}>
      <Text sx={{ fontSize: "2rem", fontWeight: "bold", margin: 0 }}>
        {jobTitle}
      </Text>
      <Text sx={{ fontSize: "1.5rem", fontWeight: "500", margin: 0 }}>
        {companyName}
      </Text>
    </Box>
  );
};

export default JobTitle;
