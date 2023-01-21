import { Box } from "@chakra-ui/react";
import React from "react";
import ArticleImage from "../components/ArticleImage";
import Details from "./Details";

const Article = () => {
  return (
    <Box>
      <ArticleImage />
      <Details />
    </Box>
  );
};

export default Article;
