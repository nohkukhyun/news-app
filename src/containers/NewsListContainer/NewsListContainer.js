import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const NewsListWrap = styled.div`
  position: relative;
`;

class NewsListContainer extends Component {
  render() {
    return (
      <NewsListWrap>
        <div></div>
      </NewsListWrap>
    );
  }
}

export default NewsListContainer;
