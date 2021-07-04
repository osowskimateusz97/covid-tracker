import styled from "styled-components";

export const Wrapper = styled.div`
  overflow-y: scroll;
  height: 400px;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  color: #6a5d5d;
  overflow-x: hidden;
`;

export const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
  background-color: white;
  &:nth-of-type(odd) {
    background-color: #f3f2f8;
  }
`;
export const Td = styled.td`
  padding: 0.5rem;
  border: none;
`;
