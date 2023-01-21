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
  const [state] = useAtom(stateAtom);

  const { pathname } = useLocation();

  useEffect(() => {
    if (matchPath("/login", pathname)) {
      setIsNone("none");
      setPosition("relative");
    } else if (matchPath("/signup", pathname)) {
      setIsNone("none");
      setPosition("relative");
    } else if (matchPath("/confirm", pathname)) {
      setIsNone("none");
      setPosition("relative");
    } else {
      setPosition("absolute");
    }
  }, [pathname]);

  return (
    <Flex
      className="inner"
      width="100%"
      height="80px"
      position={position}
      borderBottom="solid"
      alignItems='center'
    >
      <ProkenIcon />
      <Navigator />
      <Spacer />
      {state.isLoggedIn ? <LogoutButton /> : <LoginButton isNone={isNone} />}
      <Hamburger />
    </Flex>
  );
};

export default Header;
