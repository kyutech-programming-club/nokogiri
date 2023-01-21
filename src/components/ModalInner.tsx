import React from "react";
import { Button, Image, Box, Link, Center } from "@chakra-ui/react";
import { stateAtom } from "../state";
import { useAtom } from "jotai";
import twitterIcon from "../images/twitter.svg";

const ModalInner = () => {
  const [state] = useAtom(stateAtom);
  return (
    <Box height="240px">
      <Center
        borderTop="solid 1px #d6d6d6"
        display="flex"
        flexDirection="column"
      >
        <Link
          flexGrow="1"
          href={state.isLoggedIn ? "/config" : "/login"}
          fontWeight="bold"
          fontSize="2xl"
        >
          プロフィールの設定
        </Link>
        <Link position="absolute" bottom="0" mb="16px">
          <Button colorScheme="blue" display="flex" width="100%">
            <Image src={twitterIcon} width="32px" />
            九工大プロ研のツイッター
          </Button>
        </Link>
      </Center>
    </Box>
  );
};

export default ModalInner;
