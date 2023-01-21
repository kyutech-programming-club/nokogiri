import { Box } from "@chakra-ui/react";
import React from "react";
import HeaderDowner from "./templates/HeaderDowner";
import HomeSlider from "./templates/HomeSlider";
import Articles from "./templates/Articles";

const Content = () => {
  return (
    <Box flex='1'>
      <HomeSlider />
      <HeaderDowner />
      <Articles />
    </Box>
  );
};

export default Content;
