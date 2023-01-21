import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ArticleContainer from "./ArticleContainer";

const Inner = () => {
  return (
    <Box margin="auto" width='90%'>
      <Heading>新着記事</Heading>
      <ArticleContainer />
    </Box>
  );
};

export default Inner;
