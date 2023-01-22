import {
  Box,
  Center,
  ChakraProvider,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import pic2 from "../images/FRQgGAkaQAA88ss.jpeg";
import pic3 from "../images/FVXEIwLaMAAXsht.jpeg";


const AboutPage = () => {
  return (
    <ChakraProvider>
      <Box>
        <Header />
        <Box height="600px" backgroundColor="white">
          <Center>
          <Image src={pic2} width="320px" height="160px" marginTop="320px"></Image>
          <Box width="8px"></Box>
          <Image src={pic3} width="320px" height="160px" marginTop="80px" ></Image>
          <Box width="24px"></Box>
            <Text
              fontSize="16px"
              marginTop="160px"
              width="480px"
            >
              プログラミング研究会は、九州工業大学を拠点とするプログラミング系サークルです。
              普段は大学構内のものつくり工房やオンラインのDiscordで集まって活動しています。
              メンバーは、それぞれが自由に学びたいことを勉強しています。
              Webアプリやモバイルアプリを開発しているメンバーもいれば、競技プログラミングに取り組むメンバーもいます。
              その他にも、サークル全体の活動としてハッカソンやLT会を開催しています。
              プロ研には九州工業大学以外にも、九州や関西などさまざまな大学の学生が所属しています。
            </Text>
          </Center>
          <Text fontSize="24px" marginTop="16px" marginLeft="950px" color="#F472B6">メンバー募集中</Text>
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default AboutPage;
