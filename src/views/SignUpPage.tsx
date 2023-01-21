import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import Content from "../Content";
import Footer from "../parts/Footer";
import Header from "../parts/Header";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <Box position="relative">
      <Header />
      <form>
        <Heading m="24px" fontWeight="900" textAlign="center">
          九工大プロ研に入る
        </Heading>
        <Center>
          <Box bg="#f0f0ee" width="388px">
            <FormControl>
              <Box textAlign="center">
                <Input
                  color="rgba(0,0,0,.3)"
                  type=""
                  borderColor={"blackAlpha.500"}
                  focusBorderColor={"blackAlpha.500"}
                  placeholder="お名前"
                  height="48px"
                  width="calc(100% - 72px)"
                  borderRadius="0"
                  {...register("email", {
                    required: "メールアドレスを入力してください",
                  })}
                  m="16px 0"
                />
                <Input
                  color="rgba(0,0,0,.3)"
                  type="email"
                  borderColor={"blackAlpha.500"}
                  focusBorderColor={"blackAlpha.500"}
                  placeholder="九工大で使っているメールアドレス"
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
                  サインアップ
                </Button>
              </Box>
            </FormControl>
          </Box>
        </Center>
      </form>
    </Box>
  );
};

export default SignUpPage;
