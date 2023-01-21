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
  Link,
  Divider,
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
        <Center>
          <Box bg="#f0f0ee" marginTop="50px" width="388px">
            <FormControl>
              <Box textAlign="center">
                <Heading m="24px" fontWeight="900">
                  メンバーログイン
                </Heading>
                <Input
                  color="rgba(0,0,0,.3)"
                  type="email"
                  borderColor={"blackAlpha.500"}
                  focusBorderColor={"blackAlpha.500"}
                  placeholder="メールアドレス"
                  height="48px"
                  width="calc(100% - 72px)"
                  borderRadius="0"
                  {...register("email", {
                    required: "メールアドレスを入力してください",
                  })}
                  mb="16px"
                />
                <Input
                  type="password"
                  borderColor={"blackAlpha.500"}
                  focusBorderColor={"blackAlpha.500"}
                  placeholder="パスワード"
                  width="calc(100% - 72px)"
                  height="48px"
                  borderRadius="0"
                  {...register("password", {
                    required: "メールアドレスを入力してください",
                  })}
                />
                <Button
                  m="16px 0"
                  width="calc(100% - 72px)"
                  bg="#01a001"
                  color="white"
                >
                  ログイン
                </Button>

                <Box borderTop="solid #cccccc">
                  <Link color="teal.500" href="/signup" fontSize="12px">
                    メンバー登録がまだな方はこちら
                  </Link>
                </Box>
              </Box>
            </FormControl>
          </Box>
        </Center>
      </form>
    </Box>
  );
};

export default LoginPage;
