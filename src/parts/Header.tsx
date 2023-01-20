import { Box, Heading } from "@chakra-ui/layout";
import React from "react";

const Header = () => {
  return (
    <Box width="100%" height="6.5vh" display="flex" backgroundColor='red'>
      <Heading
        size="md"
        fontWeight="light"
        color="white"
        marginLeft="5"
        marginTop='0px'
        whiteSpace="nowrap"
      >
        kyutech_proken
      </Heading>
    </Box>
  );
};

export default Header;
