import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const Error: React.FC = () => {
  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <Alert status="error">
        <AlertIcon />
        Internal server error occured. Please come back later.
      </Alert>
    </div>
  );
};

export default Error;
