import styled from "styled-components";
import { Card, FormControl, Button } from "@material-ui/core";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #01031c;
  padding: 20px;
  height: 95vh;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

export const StyledFormControl = styled(FormControl)`
  background-color: rgb(37, 38, 82) !important;
  & div,
  & svg {
    color: white !important;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
  > h1 {
    color: #fc3c3c;
    font-size: 2rem;
  }
`;

export const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftSideWrapper = styled.div`
  background-color: #141532;
  padding: 15px;
  flex: 0.9;
`;

export const StyledButton = styled(Button)`
  background-color: #252652 !important;
  color: white !important;
`;

export const StyledHeading = styled.h3`
  color: #6a5d5d;
  font-weight: 400;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  &:last-of-type {
    margin-top: 1rem;
  }
`;

export const StyledCard = styled(Card)`
  background-color: #141532 !important;
`;
