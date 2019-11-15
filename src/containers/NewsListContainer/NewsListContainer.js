import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchNewsRequest } from "../../shared/actions/news.action";
import NewsList from "../../components/NewsList/NewsList";
import DotWave from "../../shared/common/components/DotWave/Dotwave";

const NewsListWrap = styled.div`
  position: relative;
`;

class NewsListContainer extends Component {
  componentDidMount() {
    this.props.fetchNewsRequest();
  }

  render() {
    console.log(this.props.fetchNews);
    return (
      <NewsListWrap>
        <DotWave backgroundColor={`#333`} number={3} />
        <NewsList list={this.props.payload} />
      </NewsListWrap>
    );
  }
}

const mapStateToProps = state => {
  const payload = state.fetchNews.payload;
  return { payload };
};

const mapDispatchToProps = {
  fetchNewsRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsListContainer);
