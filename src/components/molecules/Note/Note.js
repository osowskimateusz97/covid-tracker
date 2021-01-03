import styled,{ css } from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp} from '@fortawesome/free-solid-svg-icons';
import { convertToMilion,convertToThousandths } from '../../../utils';

const StyledContainer = styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:50px 30px 30px;
    font-size:1.5em;
    ${({color})=>(
        css`
        color:${color};
        `
    )};
    ${({isTest})=>(
        isTest && css`
        grid-template-rows:50px 30px;`
    )};
    margin-bottom:50px;
    justify-self:center;
`;
const StyledParagraph = styled(Paragraph)`
    justify-self:center;
    ${({small})=>(
        small && css`
        font-size:20px;
        `
    )}

`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size:0.4em;
    margin:0 0 0 5px;
`;
const StyledActualInfoContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:10px;

`;
 const StyledLastParagraph = styled(Paragraph)`
    grid-row:3;
    justify-self:center;
    ${({isTest})=>(
        isTest && css`
            grid-row:2;`
    )}
 `
const Note = ({globalData,todayData,type,color,isTest}) => (
    <StyledContainer isTest={isTest} color={color}>
        <StyledParagraph>{convertToMilion(globalData)} 
        <StyledActualInfoContainer>
       {!isTest && <><StyledParagraph small>{convertToThousandths(todayData)}</StyledParagraph>
        <StyledFontAwesomeIcon icon={faLongArrowAltUp}/></>} 
        </StyledActualInfoContainer>
        </StyledParagraph>
        <StyledLastParagraph isTest={isTest} small>{type}</StyledLastParagraph>
    </StyledContainer>
)
export default Note;