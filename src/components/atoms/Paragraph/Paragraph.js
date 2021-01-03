import styled,{css} from 'styled-components';

const Paragraph = styled.p`
font-size:1.5em;
    ${({small})=>(
        small && css`
            font-size:0.8em;
        `
    )}
`

export default Paragraph;