import styled, { css } from "styled-components";
import { Card, Typography } from "@material-ui/core";

export const StyledCard = styled(Card)`
  flex: 1;
  cursor: pointer;
  background-color: #252652 !important;
  ${({ active }) =>
    active &&
    css`
      border-top: 10px solid greenyellow;
    `}
  ${({ isRed }) =>
    isRed &&
    css`
      border-color: red;
    `}
   &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const StyledTypography = styled(Typography)`
  color: white !important;
`;

export const StyledHeading = styled.h2`
  color: ${({ isTotalCases }) => (isTotalCases ? "#ffe6b3" : "lightgreen")};
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  ${({ total }) =>
    total &&
    css`
      color: #6c757d;
      font-weight: 700 !important;
      font-size: 0.8rem !important;
      margin-top: 15px !important;
    `}
`;
