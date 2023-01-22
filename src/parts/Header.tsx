import { Box, Flex, Heading, Link } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { matchPath, useLocation } from "react-router-dom";
import Navigator from "../components/Navigator";
import Hamburger from "../components/Hamburger";
import LogoutButton from "../components/LogoutButton";
import LoginButton from "../components/LoginButton";
import { stateAtom } from "../state";
import { useAtom } from "jotai";
import ProkenIcon from "../components/ProkenIcon";
import { Spacer } from "@chakra-ui/react";

const Header = () => {
  const [isNone, setIsNone] = useState<string>("");
  const [position, setPosition] = useState<any>("absolute");
  const [state, setState] = useAtom(stateAtom);

  const { pathname } = useLocation();

  useEffect(() => {
    setState({ ...state, isNone: "" });
    if (matchPath("/", pathname)) {
      setPosition("absolute");
    } else {
      setPosition("relatilve");
      if (matchPath("/login", pathname)) {
        setState({ ...state, isNone: "none" });
      } else if (matchPath("/logout", pathname)) {
        setState({ ...state, isNone: "none" });
      }
    }
  }, [pathname]);

  return (
    <Flex
      className="inner"
      width="100%"
      height="80px"
      m="auto"
      position={position}
      borderBottom="solid"
      alignItems="center"
    >
      <ProkenIcon />
      <Navigator />
      <Spacer />
      <Box display={state.isNone}>
        {state.isLoggedIn ? <LogoutButton /> : <LoginButton />}
      </Box>
      <Hamburger />
    </Flex>
  );
};

export default Header;
