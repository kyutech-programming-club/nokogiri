import { Box } from "@chakra-ui/react";
import React from "react";
import pic from '../images/25513290_s.jpg'

const HomeSlider = () => {
  return (
    <Box backgroundImage={pic} >
      <Box>
        <Box width="100%" height="480px"></Box>
      </Box>
    </Box>
  );
};

export default HomeSlider;
