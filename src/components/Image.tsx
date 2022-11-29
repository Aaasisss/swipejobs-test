import { Image as ChakraImage, Box } from "@chakra-ui/react";
import React from "react";
interface Props {
  imageUrl: string;
}

const Image: React.FC<Props> = ({ imageUrl }) => {
  return (
    <Box sx={{ width: "100%", height: "300px", overflow: "hidden" }}>
      <ChakraImage
        src={imageUrl}
        sx={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </Box>
  );
};

export default Image;
