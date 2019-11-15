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
  margin-bottom: 1rem;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      background-size: cover;
      width: 160px;
      height: 100px;
    }
  }

  .contents {
    text-align: left;
    h2 {
      font-size: 14px;
      a {
        color: #333;
      }
    }
    p {
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
      font-size: 12px;
    }
    & + & {
      margin-top: 3rem;
    }
  }
`;

const NewsItem = ({ data }) => {
  console.log({ data });
  return (
    <NewsItemWrap>
      {data.urlToImage && (
        <div className="thumbnail">
          <img src={data.urlToImage} alt={"thumbnail"} />
        </div>
      )}
      <div className="contents">
        <h2>
          <a>{data.title}</a>
        </h2>
        <p>{data.description}</p>
      </div>
    </NewsItemWrap>
  );
};

export default NewsItem;
