import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "../styles/Info.css";
import { convertWageToDollar } from "../utils/ConvertWage";

interface Props {
  milesToTravel: number;
  wagePerHourInCents: number;
}

const Info: React.FC<Props> = ({ milesToTravel, wagePerHourInCents }) => {
  const wagePerHourInDollars = convertWageToDollar(wagePerHourInCents);
  const miles = milesToTravel.toFixed(2);

  return (
    <Box className="info-container">
      <Stack>
        <Text className="title">Distance</Text>
        <Text className="data">{miles} miles</Text>
      </Stack>
      <Stack>
        <Text className="title" alignSelf={"end"}>
          Hourly Rate
        </Text>
        <Text className="data">
          <span className="dollarSign">$</span>
          {wagePerHourInDollars}
        </Text>
      </Stack>
    </Box>
  );
};

export default Info;
