import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  url: string;
  site: string;
  date: string;
  title: string;
  author: string;
};
const Details = (props: Props) => {
  return (
    <Box>
      <Box
        className="site"
        display="inline-block"
        verticalAlign="middle"
        letterSpacing="normal"
        width="calc(100% - 106px)"
        color="#fff"
        fontSize="10px"
        fontWeight="700"
        position="relative"
        top="-1px"
      >
        <Text
          background="#e30920"
          padding="3px 10px"
          display="inline-block"
          verticalAlign="middle"
          boxShadow="inset -1px -1px 0 rgb(0 0 0 / 10%)"
        >
          {props.site}
        </Text>
      </Box>
      <Box
        className="date"
        display="inline-block"
        verticalAlign="middle"
        letterSpacing="normal"
        width="100px"
        height="24px"
        lineHeight="30px"
        fontSize="12px"
        fontFamily="noto sans japanese,sans-serif"
        color="rgba (0,0,0,.5)"
        textAlign="right"
      >
        {props.date}
      </Box>
      <Box className="title" lineHeight="1.4" letterSpacing="normal" mt="6px">
        <Link
          href={props.url}
          target="_blank"
          rel="nofollow"
          fontSize="15px"
          fontWeight="900"
          textDecoration="none"
          color="#000"
          wordBreak="break-all"
        >
          {props.title}
        </Link>
      </Box>
      <Box className="author">
        <Link href="#">
          <Image src="" />
          {props.author}
        </Link>
      </Box>
    </Box>
  );
};

export default Details;
