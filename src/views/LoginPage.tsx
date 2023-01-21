import {
  Box,
  Center,
  Text,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Button,
  Container,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import React from "react";
import Header from "../parts/Header";

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <Box position="relative">
      <Header />
      <form>
        <Container bg="#e7e5e5" marginTop="50px">
          <FormControl>
            <Box textAlign="center">
              <Heading>メンバーログイン</Heading>
              <Input
                type="email"
                borderColor={"blackAlpha.500"}
                focusBorderColor={"blackAlpha.500"}
                placeholder="メールアドレス"
                height={"14"}
                borderRadius="0"
                {...register("email", {
                  required: "メールアドレスを入力してください",
                })}
                marginBottom="16px"
              />
              <Input
                type="email"
                borderColor={"blackAlpha.500"}
                focusBorderColor={"blackAlpha.500"}
                placeholder="メールアドレス"
                height={"14"}
                borderRadius="0"
                {...register("email", {
                  required: "メールアドレスを入力してください",
                })}
              />
              <Button>ログイン</Button>
            </Box>
          </FormControl>
        </Container>
      </form>
    </Box>
  );
};

export default LoginPage;
