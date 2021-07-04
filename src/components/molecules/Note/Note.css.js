import styled, { css } from "styled-components";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 30px 30px;
  font-size: 1.5em;
  ${({ color }) =>
    css`
      color: ${color};
    `};
  ${({ isTest }) =>
    isTest &&
    css`
      grid-template-rows: 50px 30px;
    `};
  margin-bottom: 50px;
  justify-self: center;
`;
export const StyledParagraph = styled(Paragraph)`
  justify-self: center;
  ${({ small }) =>
    small &&
    css`
      font-size: 20px;
    `}
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 0.4em;
  margin: 0 0 0 5px;
`;
export const StyledActualInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
export const StyledLastParagraph = styled(Paragraph)`
  grid-row: 3;
  justify-self: center;
  ${({ isTest }) =>
    isTest &&
    css`
      grid-row: 2;
    `}
`;
