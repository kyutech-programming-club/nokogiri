import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { stateAtom } from "../state";

type Props = {
  isNone: string;
};

const LogoutButton = () => {
  const [state, setState] = useAtom(stateAtom);
  const navigate = useNavigate();

  const click = () => {
    setState({ ...state, isLoggedIn: false, uid: undefined });
    navigate("/login");
  };

  return (
    <Button
      shadow="md"
      onClick={click}
      colorScheme="blue"
      variant="solid"
      size="sm"
      width={"120px"}
      style={{
        borderRadius: "17px",
      }}
    >
      ログアウト
    </Button>
  );
};

export default LogoutButton;
