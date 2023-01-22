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
import {
  doc,
  collection,
  addDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { stateAtom } from "../state";
import { useAtom } from "jotai";

const ConfigPage = () => {
  const [state, setState] = useAtom(stateAtom);
  const navigate = useNavigate();
  const toast = useToast();
  const db = getFirestore();

  type formValues = {
    name: string;
    id: string;
  };
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<formValues>();

  const onSubmit = async (data: formValues) => {
    console.log(data.id.replace("@", ""));
    try {
      const userDocumetRef = doc(db, "userInformation", `${state.uid}`);
      await setDoc(userDocumetRef, {
        name: data.name,
        id: data.id.replace("@", ""),
      });
      toast({
        title: "保存しました。",
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
                  プロフィールの設定
                </Heading>
                <Tooltip
                  hasArrow
                  label={errors.name?.message}
                  bg="red.600"
                  isOpen={!!errors.name?.message}
                >
                  <Input
                    borderColor={"blackAlpha.500"}
                    focusBorderColor={"blackAlpha.500"}
                    placeholder="名前"
                    height="48px"
                    width="calc(100% - 72px)"
                    borderRadius="0"
                    {...register("name", {
                      required: "名前を入力してください",
                      minLength: {
                        value: 2,
                        message: "名前は2文字以上16文字以下です",
                      },
                      maxLength: {
                        value: 16,
                        message: "名前は2文字以上16文字以下です",
                      },
                    })}
                    mb="16px"
                  />
                </Tooltip>
                <Tooltip
                  hasArrow
                  label={errors.id?.message}
                  bg="red.600"
                  isOpen={!!errors.id?.message}
                >
                  <Input
                    borderColor={"blackAlpha.500"}
                    focusBorderColor={"blackAlpha.500"}
                    placeholder="Qiitaアカウントのid"
                    width="calc(100% - 72px)"
                    height="48px"
                    borderRadius="0"
                    {...register("id", {
                      pattern: {
                        value: /^@/,
                        message:
                          "@から始まるqiitaのアカウントのidを入力してください",
                      },
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
                  保存する
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

export default ConfigPage;
