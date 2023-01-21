import { Box } from "@chakra-ui/react";
import { url } from "inspector";
import React from "react";
import ami from "../images/ami.png";
import waku from "../images/waku.png";

const HeaderDowner = () => {
  return (
    <Box
      className="inner"
      margin="0 auto"
      backgroundSize="cover"
      _before={{
        backgroundImage: waku,
        backgroundSize: "300px 6px",
        height: "6px",
        display: "block",
      }}
      _after={{
        backgroundImage: {waku},
        backgroundRepeat: 'repeat-x center center' ,
        backgroundSize: "300px 6px",
        height: "6px",
        display: "block",
      }}
    >
      <Box backgroundImage={ami} backgroundSize="30px 48px" padding="20px 0px">
        <Box></Box>
      </Box>
    </Box>
  );
};

export default HeaderDowner;
