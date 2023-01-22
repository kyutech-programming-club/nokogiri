import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();

  const click = () => {
    console.log("login");
    navigate("/login");
  };

  return (
    <Button
      shadow="lg"
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
