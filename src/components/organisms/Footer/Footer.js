import styled from 'styled-components';
import Paragraph from '../../atoms/Paragraph/Paragraph';


const StyledFooter = styled.footer`
    height:5vh;
    background-color:rgb(6, 7, 8);
    display:flex;
    justify-content:center;
    align-items:center;
`;
const StyledParagraph = styled(Paragraph)`
    color:#fff;
    font-size:1.2em;
`
const Footer = ()=>(
    <StyledFooter>
        <StyledParagraph>Created By Mateusz Osowski</StyledParagraph>
    </StyledFooter>
)

export default Footer;