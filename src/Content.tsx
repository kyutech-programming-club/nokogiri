import { Box } from "@chakra-ui/react";
import React from "react";
import HeaderDowner from "./templates/HeaderDowner";
import HomeSlider from "./templates/HomeSlider";
import Articles from "./views/Articles";

const Content = () => {
  return (
    <Box>
      <HomeSlider />
      <HeaderDowner />
      <Articles />
    </Box>
  );
};

export default Content;
