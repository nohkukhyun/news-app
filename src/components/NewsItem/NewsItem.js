import React from "react";
import styled from "styled-components";

const NewsItemWrap = styled.div`
  width: 100%;
  display: flex;
  display: -ms-flexbox;
  justify-content: flex-start;
  -ms-flex-pack: start;
  align-items: flex-start;
  -ms-flex-align: start;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
    }
  }

  .contents {
    h2,
    a {
      color: #333;
    }
    p {
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
    & + & {
      margin-top: 3rem;
    }
  }
`;

const NewsItem = ({ articles }) => {
  const { title, description, url, urlToImage } = articles;
  return (
    <NewsItemWrap>
      {urlToImage && (
        <div className="thumbnail">
          <img src={urlToImage} alt={"thumbnail"} />
        </div>
      )}
      <div className="contents">
        <h2>
          <a>{title}</a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemWrap>
  );
};

export default NewsItem;
