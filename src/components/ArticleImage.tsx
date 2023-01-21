import { Box, Img, Link } from "@chakra-ui/react";
import React from "react";

const ArticleImage = () => {
  return (
    <Box lineHeight="0" overflow="hidden">
      <Link
        href="#"
        margin="0"
        padding="0"
        border="0"
        fontFamily="inherit"
        fontSize="100%"
        verticalAlign="baseline"
      >
        <Img src="" alt="" />
      </Link>
    </Box>
  );
};

export default ArticleImage;
