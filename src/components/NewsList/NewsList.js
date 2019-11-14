import React from "react";
import styled from "styled-components";
import NewsItem from "../NewsItem/NewsItem";

const NewsListWrap = styled.div`
  position: relative;
  width: 100%;
`;

const NewsListLoadingWrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  h3 {
    color: #333;
    text-align: center;
  }
`;

const NewsList = ({ list = [] }) => {
  return (
    <NewsListWrap>
      <NewsItem />
    </NewsListWrap>
  );
};

export default NewsList;
