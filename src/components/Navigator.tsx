import { Box, Link } from "@chakra-ui/react";
import React from "react";
import LoginButton from "./LoginButton";

const Navigator = (props: any) => {
  return (
    <Box display="flex" alignItems="center">
      <Link
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
      <LoginButton isNone={props.isNone} />
    </Box>
  );
};

export default Navigator;
