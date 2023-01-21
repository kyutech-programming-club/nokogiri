import { Box, Center, Link, Text } from "@chakra-ui/react";
import React from "react";

import Content from "../Content";
import Footer from "../parts/Footer";
import Header from "../parts/Header";

const Confirm = () => {
  return (
    <Box>
      <Header />
      <Center>
        <Box
          height="calc(100vh - 280px)"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            bg="#f0f0ee"
            width="388px"
            height="80px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <Text fontWeight="bold">メールをご確認ください</Text>
              <Center mt='16px'>
                <Link color="teal.500" href="/" fontSize="12px">
                  ホームに戻る
                </Link>
              </Center>
            </Box>
          </Box>
        </Box>
      </Center>
      <Footer />
    </Box>
  );
};

export default Confirm;
