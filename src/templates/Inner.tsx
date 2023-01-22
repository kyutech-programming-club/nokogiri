import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ArticleContainer from "./ArticleContainer";

const Inner = () => {
  return (
    <Box margin="auto" width='90%'>
      <Heading textAlign='center' m='16px' color='white'  textShadow="0px 2px 5px black">新着記事</Heading>
      <ArticleContainer />
    </Box>
  );
};

export default Inner;
