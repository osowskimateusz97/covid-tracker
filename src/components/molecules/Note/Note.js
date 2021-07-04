import { faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import { convertToMilion, convertToThousandths } from "../../../utils";
import {
  StyledContainer,
  StyledParagraph,
  StyledFontAwesomeIcon,
  StyledActualInfoContainer,
  StyledLastParagraph,
} from "./Note.css";

const Note = ({ globalData, todayData, type, color, isTest }) => (
  <StyledContainer isTest={isTest} color={color}>
    <StyledParagraph>
      {convertToMilion(globalData)}
      <StyledActualInfoContainer>
        {!isTest && (
          <>
            <StyledParagraph small>
              {convertToThousandths(todayData)}
            </StyledParagraph>
            <StyledFontAwesomeIcon icon={faLongArrowAltUp} />
          </>
        )}
      </StyledActualInfoContainer>
    </StyledParagraph>
    <StyledLastParagraph isTest={isTest} small>
      {type}
    </StyledLastParagraph>
  </StyledContainer>
);
export default Note;
