import { Box, Heading, Link } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { matchPath, useLocation } from "react-router-dom";
import Navigator from "../components/Navigator";
import proken_mojiicon from "../images/proken__mojiicon.png";

const Header = () => {
  const [isNone, setIsNone] = useState<string>("");
  const [position, setPosition] = useState<any>("absolute");

  const { pathname } = useLocation();

  useEffect(() => {
    if (matchPath("/login", pathname)) {
      setIsNone("none");
      setPosition("relative");
    } else if (matchPath("/signup", pathname)) {
      setIsNone("none");
      setPosition("relative");
    } else {
      setPosition("absolute");
    }
  }, [pathname]);

  return (
    <Box
      className="inner"
      width="100%"
      height="80px"
      display="flex"
      position={position}
      borderBottom="solid"
      alignItems="center"
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
          href="/"
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
      <Navigator isNone={isNone} />
    </Box>
  );
};

export default Header;
