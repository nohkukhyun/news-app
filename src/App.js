import React, { Component } from "react";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import NewsList from "./components/NewsList/NewsList";

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
    .wrap_content_body{
      width: 1024px;
      border-top: 1px solid #e1e1e1;
      border-bottom: 1px solid #e1e1e1;
      padding: 20px;
      position: relative;
      min-height: 500px;
      margin: 0 auto
    }
  }
`;

class App extends Component {
  state = {
    newsData: null
  };

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <div className="wrap_body">
          <div className="wrap_content_body">
            <NewsList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
