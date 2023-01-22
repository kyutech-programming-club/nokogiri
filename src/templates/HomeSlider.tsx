import {
  Box,
  Center,
  Heading,
  Image,
  Link,
  Spacer,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import pic from "../images/25513290_s.jpg";
import qiita from "../images/aaaa.jpg";

const HomeSlider = () => {
  const items = [1, 2, 3, 4, 5];
  return (
    <Box backgroundImage={pic} width="100%" height="480px" pt="152px">
      <Center>
        <Heading color="white" mb="10" textShadow="2px 2px 2px black">
          人気記事
        </Heading>
      </Center>
      <UnorderedList
        overflowX="auto"
        overflowY="hidden"
        whiteSpace="nowrap"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {items.map((value: number, i) => {
          return (
            <Link
              key={i}
              href="https://qiita.com/proken/items/80d20adcf24b2b53c149"
              display="inline-block"
              width="400px"
              height="225px"
              ml="8px"
              mr="8px"
              fontSize="40"
              fontWeight="bold"
            >
              <Box lineHeight="0" overflow="hidden" height="180px">
                <Image
                  src={qiita}
                  width="100%"
                  height="180px"
                  objectFit="cover"
                />
              </Box>
              <Box
                background="#e30920"
                fontWeight="900"
                fontSize="15px"
                color="white"
                textAlign='left'
                padding='10px'
                lineHeight='1.5'
                position='relative'
                top='-1px'
              >
                <Text>{value}位</Text>
              </Box>
            </Link>
          );
        })}
      </UnorderedList>
    </Box>
  );
};

export default HomeSlider;
