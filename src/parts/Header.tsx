import { Box, Heading, Link } from "@chakra-ui/layout";
import React from "react";
import Navigator from "../components/Navigator";
import Hamburger from "../components/Hamburger";
import proken_mojiicon from "../images/proken__mojiicon.png";

const Header = () => {
  return (
    <Box
      className="inner"
      width="100%"
      height="80px"
      display="flex"
      position="absolute"
      borderBottom="solid"
      alignItems='center'
    >
      <Heading
        size="2xl"
        fontWeight="light"
        color="white"
        marginLeft="5"
        marginTop="0px"
        whiteSpace="nowrap"
      >
        <Link
          href="#"
          backgroundImage={proken_mojiicon}
          backgroundSize="cover"
          textIndent="-9999999px"
          overflow="hidden"
          whiteSpace="nowrap"
          width="132px"
          height="46px"
          display="block"
        >
          kyutech_proken
        </Link>
      </Heading>
      <Navigator />
      <Hamburger />
    </Box>
  );
};

export default Header;
