import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

const Category = styled.div`
  display: flex;
  display: -ms-flexbox;
  justify-content: space-between;
  -ms-flex-pack: space-between;
  align-items: center;
  .logo {
    color: #333;
    font-weight: bold;
  }
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

const NewsCategory = ({ cateItems }) => {
  return (
    <Category>
      <h1 className="logo">N</h1>
      <ul>
        {cateItems.map((data, i) => {
          return (
            <Route>
              <li key={`newsitem-${i}`}>{data.title}</li>
            </Route>
          );
        })}
      </ul>
    </Category>
  );
};

export default NewsCategory;
