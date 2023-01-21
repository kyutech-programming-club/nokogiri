import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Tooltip,
  Link,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Content from "../Content";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import { stateAtom } from "../state";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";
import { FirebaseError } from "@firebase/util";
import { auth } from "../firebase";

const SignUpPage = () => {
  const [, setState] = useAtom(stateAtom);
  const navigate = useNavigate();

  type formValues = {
    email: string;
    password: string;
  };
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<formValues>();

  const onSubmit = async (data: formValues) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await sendEmailVerification(userCredential.user);
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e);
      }
    }
    navigate("/confirm");
  };

  return (
    <Box position="relative">
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading m="24px" fontWeight="900" textAlign="center">
          九工大プロ研に入る
        </Heading>
        <Center>
          <Box bg="#f0f0ee" width="388px">
            <Box textAlign="center">
              <FormControl>
                <Tooltip
                  hasArrow
                  label={errors.email?.message}
                  bg="red.600"
                  isOpen={!!errors.email?.message}
                >
                  <Input
                    type="email"
                    borderColor={"blackAlpha.500"}
                    focusBorderColor={"blackAlpha.500"}
                    placeholder="九工大で使っているメールアドレス"
                    height="48px"
                    borderRadius="0"
                    width="calc(100% - 72px)"
                    {...register("email", {
                      required: "メールアドレスを入力してください",
                      pattern: {
                        value: /@mail\.kyutech\.jp$/,
                        message:
                          "@mail.kyutech.jpで終わるメールアドレスを入力してください",
                      },
                    })}
                    m="32px 0"
                  />
                </Tooltip>
                <Tooltip
                  hasArrow
                  label={errors.password?.message}
                  bg="red.600"
                  isOpen={!!errors.password?.message}
                >
                <Input
                  type="password"
                  borderColor={"blackAlpha.500"}
                  focusBorderColor={"blackAlpha.500"}
                  placeholder="パスワード"
                  width="calc(100% - 72px)"
                  height="48px"
                  borderRadius="0"
                  {...register("password", {
                    required: "パスワードを入力してください",
                    minLength: {
                      value: 8,
                      message: "パスワードは8文字以上16文字以下です",
                    },
                    maxLength: {
                      value: 16,
                      message: "パスワードは8文字以上16文字以下です",
                    },
                  })}
                />
                </Tooltip>
              </FormControl>
              <Button
                type="submit"
                m="16px 0"
                width="calc(100% - 72px)"
                bg="#01a001"
                color="white"
                isLoading={isSubmitting}
              >
                サインアップ
              </Button>
            </Box>
          </Box>
        </Center>
      </form>
    </Box>
  );
};

export default SignUpPage;
