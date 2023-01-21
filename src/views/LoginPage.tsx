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
  useToast,
  Tooltip,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import React from "react";
import Header from "../parts/Header";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseError } from "@firebase/util";
import { auth } from "../firebase";
import { stateAtom } from "../state";

const LoginPage = () => {
  const [, setState] = useAtom(stateAtom);
  const navigate = useNavigate();
  const toast = useToast();

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
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast({
        title: "ログインしました。",
        status: "success",
        position: "top",
      });
    } catch (e) {
      toast({
        title: "エラーが発生しました。",
        status: "error",
        position: "top",
      });
      if (e instanceof FirebaseError) {
        console.log(e);
      }
    }
    navigate("/");
  };

  return (
    <Box position="relative">
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Center>
          <Box bg="#f0f0ee" marginTop="50px" width="388px">
            <FormControl>
              <Box textAlign="center">
                <Heading m="24px" fontWeight="900">
                  メンバーログイン
                </Heading>
                <Tooltip
                  hasArrow
                  label={errors.email?.message}
                  bg="red.600"
                  isOpen={!!errors.email?.message}
                >
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
                    })}
                  />
                </Tooltip>
                <Button
                  type="submit"
                  m="16px 0"
                  width="calc(100% - 72px)"
                  bg="#01a001"
                  color="white"
                  isLoading={isSubmitting}
                >
                  ログイン
                </Button>

                <Box borderTop="solid #cccccc">
                  <Link color="teal.500" href="/signup" fontSize="12px">
                    メンバー登録がまだの方はこちら
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
