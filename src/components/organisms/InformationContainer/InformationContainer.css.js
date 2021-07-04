import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 150px 150px;
  width: 85%;
  margin: 0 auto;
  height: 45vh;
`;
export const Title = styled.h1`
  grid-column: 1 / span 3;
  height: 10vh;
  padding: 30px 0 0 0;
  color: #fff;
  font-size: 2.2em;
  margin-bottom: 30px;
`;
export const Container = styled.div`
  background-color: #01031c;
`;
