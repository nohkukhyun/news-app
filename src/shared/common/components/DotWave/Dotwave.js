import React from "react";
import styled from "styled-components";

const DotWaveWrap = styled.div`
  width: 100%;
  height: calc(100vh - 82px);
  position: relative;
  .loading-bar {
    position: relative;
    display: flex;
    display: -ms-flexbox;
    justify-content: center;
    -ms-flex-pack: center;
    align-items: center;
    -ms-flex-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .loading {
      background-color: #6e29ff;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 8px;
      &:last-child() {
        margin-right: 0px;
      }
      &.move1 {
        animation: loading 0.6s 0.1s linear infinite;
      }
      &.move2 {
        animation: loading 0.6s 0.2s linear infinite;
      }
      &.move3 {
        animation: loading 0.6s 0.3s linear infinite;
      }
    }
    @keyframes loading {
      0% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(0, 10px);
      }
      100% {
        transform: translate(0, 0);
      }
    }
  }
`;

const DotWave = ({
  width = "",
  height = "",
  backgroundColor = "",
  number = 0
}) => {
  return (
    <DotWaveWrap>
      <div className="loading-bar">
        <LoadingCircle
          backgroundColor={backgroundColor}
          height={height}
          width={width}
          number={number}
        />
      </div>
    </DotWaveWrap>
  );
};

export default DotWave;

const LoadingCircle = ({
  backgroundColor = "",
  width = "",
  height = "",
  number = 0
}) => {
  const loadingList = () => {
    const l = [];
    for (let i = 0; i < number; i++) {
      l.push(i);
    }
    return l;
  };

  return loadingList().map((data, i) => {
    return (
      <DotWaveWrap
        className={`loading move${i + 1}`}
        style={{
          backgroundColor: backgroundColor,
          width: width,
          height: height
        }}
        key={`loading-${data}`}
      ></DotWaveWrap>
    );
  });
};
