import React from "react";
import styled from "styled-components";

const ViewWrap = styled.div`
  position: relative;
  width: 100%;
`;

const View = ({ data }) => {
  let newData = JSON.stringify(data, null, 2);
  console.log({ data });
  return (
    <ViewWrap>
      <textarea rows={7} value={newData}></textarea>
    </ViewWrap>
  );
};

export default View;
