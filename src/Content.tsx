import { Box } from "@chakra-ui/react";
import React from "react";
import HeaderDowner from "./templates/HeaderDowner";
import HomeSlider from "./templates/HomeSlider";
import Inner from "./templates/Inner"

const Content = () => {
  return (
    <Box flex='1'backgroundColor='#e5d2d4'>
      <HomeSlider />
      <HeaderDowner />
      <Inner />
    </Box>
  );
};

export default Content;
