import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NewsItem from "../NewsItem/NewsItem";
import axios from "axios";

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

const NewsList = ({ data }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async 이용해서 뉴스 가져오기
    const fetchNewsData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=1f04516a3f5b4157a5b8434ca25acc40"
        );
        setArticles(res.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchNewsData();
  }, []);

  if (loading) {
    return (
      <NewsListLoadingWrap>
        <h3>Loading...</h3>
      </NewsListLoadingWrap>
    );
  }

  if (!articles) {
    return null;
  }

  return (
    <NewsListWrap>
      {articles.map((article, i) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListWrap>
  );
};

export default NewsList;
