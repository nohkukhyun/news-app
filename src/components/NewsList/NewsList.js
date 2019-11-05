import React from "react";
import styled from "styled-components";
import NewsItem from "../NewsItem/NewsItem";

const NewsListWrap = styled.div`
  position: relative;
  width: 100%;
`;

const NewsList = ({ data }) => {
  return (
    <NewsListWrap>
      <NewsItem articles={data} />
    </NewsListWrap>
  );
};

export default NewsList;
