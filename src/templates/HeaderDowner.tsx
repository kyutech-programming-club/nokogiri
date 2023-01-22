import { Box } from "@chakra-ui/react";
import { url } from "inspector";
import React from "react";
import ami from "../images/ami.png";
import waku from "../images/waku.png";
import banner from "../images/banner-bg.jpg"

const HeaderDowner = () => {
  return (
    <Box margin="0 auto" backgroundImage={banner} backgroundSize="cover" >
      <Box
        backgroundImage={ami}
        backgroundSize="30px 48px"
        padding="40px 0px"
        // _before={{
        //   backgroundImage: {waku},
        //   backgroundSize: "300px 6px",
        //   height: "6px",
        //   display: "block",
        // }}
        // _after={{
        //   backgroundImage: waku,
        //   backgroundRepeat: "repeat-x center center",
        //   backgroundSize: "300px 6px",
        //   height: "6px",
        //   display: "block",
        // }}
      >
        <Box></Box>
      </Box>
    </Box>
  );
};

export default HeaderDowner;
