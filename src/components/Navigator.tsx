import { Box, Link } from "@chakra-ui/react";
import React from "react";
import LoginButton from "./LoginButton";
import { useAtom } from "jotai";
import { stateAtom } from "../state";
import LogoutButton from "./LogoutButton";

const Navigator = (props: any) => {
  return (
    <Box display="inline-block" alignItems="center" whiteSpace="nowrap">
      <Link
        href="/about"
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
        whiteSpace="nowrap"
        href="/members"
        fontFamily="noto sans japanese,sans-serif"
        fontWeight="900"
        fontSize="16px"
        textDecoration="none"
        margin="auto 16px"
        top="1px"
      >
        所属メンバー
      </Link>
    </Box>
  );
};

export default Navigator;
