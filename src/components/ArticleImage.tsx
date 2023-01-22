import { Box, Img, Link } from "@chakra-ui/react";
import React from "react";
import { ArticleType } from "../parts/Article";
import qiita from "../images/qiita.png";
const ArticleImage = ({ url }: { url: string }) => {
  return (
    <Box lineHeight="0" overflow="hidden" height="138px" shadow='md'>
      <Link
        href={url}
        margin="0"
        padding="0"
        border="0"
        fontFamily="inherit"
        fontSize="100%"
        verticalAlign="baseline"
      >
        <Img
          src={qiita}
          alt=""
          width="100%"
          height="100%"
          m="auto"
          objectFit="cover"
        />
      </Link>
    </Box>
  );
};

export default ArticleImage;
