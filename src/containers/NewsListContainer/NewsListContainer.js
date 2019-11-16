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
    const { news, category } = this.props;
    console.log("this props", this.props);

    const isLoading = () => {
      if (news.isLoading)
        return <DotWave backgroundColor={`#333`} number={3} />;
    };

    return (
      <NewsListWrap>
        {isLoading()}
        <NewsList list={news.newsList} />
      </NewsListWrap>
    );
  }
}

const mapStateToProps = state => {
  const news = state.news;
  return { news };
};

const mapDispatchToProps = {
  fetchNewsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsListContainer);
