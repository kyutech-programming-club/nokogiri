import { Box } from "@chakra-ui/react";
import React from "react";
import ArticleImage from "../components/ArticleImage";
import Details from "./Details";

export type ArticleType = {
  url: string;
  site: string;
  date: string;
  title: string;
  author: string;
};

const Article = () => {
  const articleInfo: Array<ArticleType> = [
    {
      url: "https://qiita.com/proken/items/438e3a460709c59628b4",
      site: "qiita",
      date: "0000000",
      title: "hogehoge",
      author: "proken",
    },
    {
      url: "https://qiita.com/proken/items/438e3a460709c59628b4",
      site: "qiita",
      date: "0000000",
      title: "hogehoge",
      author: "proken",
    },
    {
      url: "https://qiita.com/proken/items/438e3a460709c59628b4",
      site: "qiita",
      date: "0000000",
      title: "hogehoge",
      author: "proken",
    },
    {
      url: "https://qiita.com/proken/items/438e3a460709c59628b4",
      site: "qiita",
      date: "0000000",
      title: "hogehoge",
      author: "proken",
    },
    {
      url: "https://qiita.com/proken/items/438e3a460709c59628b4",
      site: "qiita",
      date: "0000000",
      title: "hogehoge",
      author: "proken",
    },
    {
      url: "https://qiita.com/proken/items/438e3a460709c59628b4",
      site: "qiita",
      date: "0000000",
      title: "hogehoge",
      author: "proken",
    },
    {
      url: "https://qiita.com/proken/items/438e3a460709c59628b4",
      site: "qiita",
      date: "0000000",
      title: "hogehoge",
      author: "proken",
    },
  ];

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr 1fr"
      gridGap="25px"
      pb="25px"
    >
      {articleInfo.map((article: ArticleType, i) => {
        return (
          <Box
            key={i}
            width="264px"
            borderTop="dotted 1px rgba(0,0,0,.3)"
            padding="15px 0 0"
            textAlign="left"
            verticalAlign="top"
          >
            <ArticleImage url={article.url} />
            <Details
              url={article.url}
              site={article.site}
              date={article.date}
              title={article.title}
              author={article.author}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Article;
