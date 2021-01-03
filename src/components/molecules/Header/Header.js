import React,{ useState } from 'react';
import styled,{ css } from 'styled-components';
import Paragraph from '../../../components/atoms/Paragraph/Paragraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import cosmosBg from '../../../assets/world.jpg';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.header`
width:100%;
height:50vh;
display:flex;
justify-content:center;
flex-direction:column;
margin:0 auto;
align-items:center;
color: white;
cursor:pointer;
position:relative;
`;
const Image = styled.img`
background:url(${cosmosBg}) center no-repeat;
background-color:#01031C;
width:100%;
height:100%;
position:absolute;
z-index:-1;
transition:0.4s;
padding: 30px;
${({isActive})=> 
    isActive && css`
        filter:blur(3px);
        padding:0;
    `
}
`;
const StyledParagraph = styled(Paragraph)`
font-size:2em;
letter-spacing:1px;
margin-bottom:20px;
transition:0.3s;
${({isActive})=> 
    isActive && css`
        font-size:1em;
    `
}
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size:3em;
    transition:0.3s;
    margin-top:20px;
    ${({isActive})=> 
    isActive && css`
        transform:scale(1.5)
    `
}

`;
const HeaderMsgContainer = styled.div`
    width:100%;
    height:30%;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media(max-width:768px){
        width:80%;
    }
`;


const Header = ()=> {

    const [isActive,setActive] = useState(false);
    
    const changeHeader = (type)=>{
        if(type==='out') {
            return setActive(false);
        };
        setActive(true);
    }
    return(
    <StyledWrapper>
        <Image isActive={isActive}/>
        <Link style={{textDecoration:'none',color:'white'}} to="/map"><HeaderMsgContainer isActive={isActive} onMouseOut={()=>changeHeader('out')} onMouseOver={changeHeader}>
        <StyledParagraph isActive={isActive}>FULL SCREEN MAP</StyledParagraph>
        <StyledFontAwesomeIcon isActive={isActive} icon={faGlobeEurope}/>
        </HeaderMsgContainer>
        </Link>
    </StyledWrapper>
    )
}


export default Header;