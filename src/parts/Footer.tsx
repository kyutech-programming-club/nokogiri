import { Box, Flex, Text, Image, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import ProkenIcon from "../components/ProkenIcon";
import proken_icon from "../images/proken_icon.jpeg";
import Navigator from "../components/Navigator";
import TwitterIcon from "../images/twitter_icon.jpeg"


const Footer = () => {
  const twitter = () => {
    window.open("https://twitter.com/kyutech_proken");
  };
  const [position] = useState<any>("absolute");
  return (
    <Box
      backgroundColor="#FFFFFF"
      borderTop="solid 1px"
      left="0"
      bottom="0"
      width="100%"
    >
      <Flex
        className="inner"
        width="100%"
        height="80px"
        position={position}
        borderBottom="solid"
        alignItems="center"
      >
        <Box width="24px"></Box>
        <Image src={proken_icon} width="56px" height="56px"></Image>
        <Box width="24px"></Box>
        <ProkenIcon />
        <Navigator />
        <Spacer />
        <Image src={TwitterIcon} width="56px" height="56px" onClick={twitter}></Image>
        <Box width="24px"></Box>
      </Flex>
    </Box>
  );
};

export default Footer;
