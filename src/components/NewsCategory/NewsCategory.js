import React from "react";
import styled from "styled-components";
import { categories } from "../../shared/data/NewsCategories";

const Category = styled.div`
  display: flex;
  display: -ms-flexbox;
  justify-content: space-between;
  -ms-flex-pack: space-between;
  ul {
    list-style: none;
  }
`;

const NewsCategory = ({ categories }) => {
  console.log({ categories });
  return (
    <Category>
      <ul>
        {categories.map((data, i) => (
          <li>{data.title}</li>
        ))}
      </ul>
    </Category>
  );
};

export default NewsCategory;
