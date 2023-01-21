import { Box } from "@chakra-ui/react";
import React from "react";
import Content from "../Content";
import Footer from "../parts/Footer";
import Header from "../parts/Header";

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Content />
      <Footer />
    </Box>
  );
};

export default HomePage;
