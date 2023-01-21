import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Header from "./parts/Header";
import Content from "./Content";
import Footer from "./parts/Footer";

function App() {
  return (
    <Box>
      <Header />
      <Content />
      <Footer />
    </Box>
  );
}

export default App;
