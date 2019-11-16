import React from "react";
import styled from "styled-components";
import NewsItem from "../NewsItem/NewsItem";

const NewsListWrap = styled.div`
  position: relative;
  width: 100%;
`;

const NewsList = ({ list = [] }) => {
  console.log({ list });

  return (
    <NewsListWrap>
      {list.map((data, i) => {
        return <NewsItem key={`newslist-${i}`} data={data} />;
      })}
    </NewsListWrap>
  );
};

export default NewsList;
