import React, { useState, useCallback } from "react";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import NewsList from "./components/NewsList/NewsList";
import NewsCategory from "./components/NewsCategory/NewsCategory";
import { categories } from "./shared/data/NewsCategories";
import NewsListContainer from "./containers/NewsListContainer/NewsListContainer";

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
  ul{
    padding: 0;
    margin: 0;
  }
  h1,h2,h3,h4,h5,h6,p{
    padding:0;
  }

  .wrap_body{
    position: relative;
    width: 100%;
    padding:10px 20px;
    .wrap_content_body{
      width: 1024px;
      border-top: 1px solid #e1e1e1;
      border-bottom: 1px solid #e1e1e1;
      position: relative;
      min-height: 500px;
      margin: 0 auto
    }
  }
`;

const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <div className="App">
      <GlobalStyle />
      <div className="wrap_body">
        <div className="wrap_content_body">
          <NewsCategory
            categories={categories}
            category={category}
            onSelect={onSelect}
          />
          <NewsListContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
