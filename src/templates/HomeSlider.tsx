import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import pic from "../images/25513290_s.jpg";
import "./HomeSlider.css";

const HomeSlider = () => {
  const BoxClick1 = () => {
    window.open("https://qiita.com/proken/items/80d20adcf24b2b53c149");
  };
  return (
    <>
      <Box backgroundImage={pic}>
        <Box width="100%" height="480px">
          <ul className="horizontal-list">
            {/* <Center mt='100px'>
              <Heading color="white">人気記事</Heading>
            </Center> */}
            <li className="item">
              <Box onClick={BoxClick1}>環境</Box>
            </li>
            <li className="item">
              <Box>aaa</Box>
            </li>
            <li className="item">
              <Box>aaa</Box>
            </li>
            <li className="item">
              <Box>aaa</Box>
            </li>
            <li className="item">
              <Box>aaa</Box>
            </li>
            <li className="item">
              <Box>aaa</Box>
            </li>
          </ul>
        </Box>
      </Box>
    </>
  );
};

export default HomeSlider;
