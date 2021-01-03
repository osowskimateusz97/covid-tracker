import styled from 'styled-components';
import Note from '../../molecules/Note/Note';
import InfoBox from "../../molecules/InfoBox/InfoBox";
import numeral from 'numeral';
import {prettyPrintStat} from '../../../utils';
const StyledWrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:150px 150px;
    width:85%;
    margin:0 auto;
    height:45vh;
`;
const StyledTitle = styled.h1`
    grid-column:1/span 3;
    height:10vh;
    padding:30px 0 0 0 ;
    color:#fff;
    font-size:2.2em;
    margin-bottom:30px;
`;
const Container = styled.div`
  background-color:#01031C;
`;
const InformationContainer = ({globalCases:{cases,deaths,recovered,tests,todayCases,todayDeaths,todayRecovered}})=> (
    <Container>
    <StyledWrapper>
        <StyledTitle>World data</StyledTitle>
        <InfoBox
            mainPage
            title="Coronavirus Cases"
            isTotalCases
            cases={prettyPrintStat(todayCases)}
            total={numeral(cases).format("0.0a")}
          />
          <InfoBox
            mainPage
            title="Recovered"
            cases={prettyPrintStat(todayRecovered)}
            total={numeral(recovered).format("0.0a")}
          />
          <InfoBox
            mainPage
            title="Deaths"
            isRed
            cases={prettyPrintStat(todayDeaths)}
            total={numeral(deaths).format("0.0a")}
          />
    </StyledWrapper>
    </Container>
    
)

export default InformationContainer;