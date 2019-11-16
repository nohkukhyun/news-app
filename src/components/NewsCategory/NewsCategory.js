import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

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
    a {
      padding: 5px 15px;
      color: #444;
      cursor: pointer;
      &.active {
        color: #505bda;
        border-bottom: 1px solid #505bda;
      }
    }
  }
`;

const NewsCategory = ({ categories = [], category, onSelect }) => {
  console.log({ category });
  return (
    <Category>
      <h1 className="logo">N</h1>
      <ul>
        {categories.map((data, i) => {
          return (
            <NavLink
              key={`newsitem-${i}`}
              onClick={() => onSelect(data.name)}
              className={category === data.name ? "active" : null}
              exact={data.name === "all"}
              to={data.name === "all" ? "/" : `${data.name}`}
            >
              {data.title}
            </NavLink>
          );
        })}
      </ul>
    </Category>
  );
};

export default NewsCategory;
