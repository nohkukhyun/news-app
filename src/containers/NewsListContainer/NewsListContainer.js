import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchNews } from "../../shared/actions/news.action";
import NewsList from "../../components/NewsList/NewsList";

const NewsListWrap = styled.div`
  position: relative;
`;

class NewsListContainer extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }
  render() {
    console.log(this.props);
    return (
      <NewsListWrap>
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
  fetchNews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsListContainer);
