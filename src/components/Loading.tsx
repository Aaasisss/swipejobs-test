import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loading: React.FC = () => {
  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
};

export default Loading;
