import { Box, Link } from "@chakra-ui/react";
import React from "react";

const Navigator = () => {
  return (
    <Box
      display="inline-block"
      verticalAlign="middle"
      whiteSpace="nowrap"
      lineHeight="0"
    >
      <Link
        color="white"
        textShadow="2px 2px 1px black"
        href="#"
        fontFamily="noto sans japanese,sans-serif"
        fontWeight="900"
        fontSize="16px"
        textDecoration="none"
        margin="auto 16px"
        top="1px"
      >
        プロ研について
      </Link>
      <Link
       color="white"
       textShadow="2px 2px 1px black"
        whiteSpace="nowrap"
        href="/members"
        fontFamily="noto sans japanese,sans-serif"
        fontWeight="900"
        fontSize="16px"
        textDecoration="none"
        margin="auto 16px"
        top="1px"
      >
        メンバーたち
      </Link>
    </Box>
  );
};

export default Navigator;
