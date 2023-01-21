import { Heading, Link, Image } from "@chakra-ui/react";
import React from "react";
import proken_mojiicon from "../images/proken__mojiicon.png";

const ProkenIcon = () => {
  return (
    <Heading
      display="inline-block"
      size="2xl"
      fontWeight="light"
      color="white"
      marginLeft="5"
      marginTop="0px"
      whiteSpace="nowrap"
    >
      <Link
        href="/"
        textIndent="-9999999px"
        overflow="hidden"
        whiteSpace="nowrap"
        width="132px"
        height="46px"
        display="block"
      >
        <Image src={proken_mojiicon} />
        kyutech_proken
      </Link>
    </Heading>
  );
};

export default ProkenIcon;
