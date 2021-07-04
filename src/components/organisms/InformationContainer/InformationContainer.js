import { InfoBox } from "components/molecules";
import numeral from "numeral";
import { Wrapper, Title, Container } from "./InformationContainer.css";
import { prettyPrintStat } from "../../../utils";

const InformationContainer = ({
  globalCases: {
    cases,
    deaths,
    recovered,
    tests,
    todayCases,
    todayDeaths,
    todayRecovered,
  },
}) => (
  <Container>
    <Wrapper>
      <Title>World data</Title>
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
    </Wrapper>
  </Container>
);

export default InformationContainer;
