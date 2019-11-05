import React, { Component } from "react";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import View from "./components/View/View";

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
    margin:0;
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
    const { newsData } = this.state;
    const handleClick = async () => {
      try {
        const res = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=1f04516a3f5b4157a5b8434ca25acc40"
        );
        this.setState({
          newsData: res.data
        });
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <div className="App">
        <GlobalStyle />
        <div className="wrap_body">
          <div className="wrap_content_body">
            <button onClick={handleClick}>get News</button>
          </div>
          <View data={newsData} />
        </div>
      </div>
    );
  }
}

export default App;
