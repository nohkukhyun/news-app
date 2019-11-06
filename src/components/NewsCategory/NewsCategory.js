import React from "react";
import styled from "styled-components";
import { categories } from "../../shared/data/NewsCategories";

const Category = styled.div`
  display: flex;
  display: -ms-flexbox;
  justify-content: space-between;
  -ms-flex-pack: space-between;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    display: -ms-flexbox;
    li {
      padding: 5px 15px;
      color: #444;
    }
  }
`;

const cateItems = categories;

const NewsCategory = () => {
  console.log({ cateItems });
  return (
    <Category>
      <h1>N</h1>
      <ul>
        {cateItems.map((data, i) => {
          return <li>{data.title}</li>;
        })}
      </ul>
    </Category>
  );
};

export default NewsCategory;