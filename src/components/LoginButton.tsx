import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";

type Props = {
  isNone: string;
};

const LoginButton = (props: Props) => {
  const navigate = useNavigate();

  const click = () => {
    console.log("login");
    navigate("/login");
  };

  return (
    <Button
      display={props.isNone}
      onClick={click}
      colorScheme="blue"
      variant="solid"
      size="sm"
      width={"120px"}
      style={{
        borderRadius: "17px",
      }}
    >
      ログイン
    </Button>
  );
};

export default LoginButton;
