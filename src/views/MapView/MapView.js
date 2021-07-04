import React, { useState, useEffect } from "react";
import {
  Wrapper,
  StyledFormControl,
  Header,
  StatsWrapper,
  StyledHeading,
  StyledCard,
  LeftSideWrapper,
  StyledButton,
} from "./MapView.css";
import { MenuItem, Select, CardContent } from "@material-ui/core";
import { InfoBox } from "components/molecules";
import { LineGraph } from "components/atoms";
import { Table } from "components/atoms";
import { sortData, prettyPrintStat } from "../../utils";
import numeral from "numeral";
import { Map } from "components/molecules";
import "leaflet/dist/leaflet.css";

import { Link } from "react-router-dom";

const StartView = () => {
  const [country, setInputCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [countries, setCountries] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      const res = await fetch("https://disease.sh/v3/covid-19/countries");
      const data = await res.json();
      const countries = data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }));
      let sortedData = sortData(data);
      setCountries(countries);
      setMapCountries(data);
      setTableData(sortedData);
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    const res = await fetch(url);
    const data = await res.json();
    setInputCountry(countryCode);
    setCountryInfo(data);
    setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
    setMapZoom(4);
  };

  return (
    <Wrapper>
      <LeftSideWrapper>
        <Header>
          <Link to="/" style={{ textDecoration: "none" }}>
            <StyledButton variant="contained">Back</StyledButton>
          </Link>
          <h1>COVID-19 Tracker</h1>
          <StyledFormControl>
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </Header>

        <Map
          countries={mapCountries}
          casesType={casesType}
          center={mapCenter}
          zoom={mapZoom}
        />
        <StatsWrapper>
          <InfoBox
            onClick={(e) => setCasesType("cases")}
            title="Coronavirus Cases"
            isTotalCases
            active={casesType === "cases"}
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={numeral(countryInfo.cases).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            active={casesType === "recovered"}
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={numeral(countryInfo.recovered).format("0.0a")}
          />
          <InfoBox
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            isRed
            active={casesType === "deaths"}
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={numeral(countryInfo.deaths).format("0.0a")}
          />
        </StatsWrapper>
      </LeftSideWrapper>
      <StyledCard>
        <CardContent>
          <div>
            <StyledHeading>Live Cases by Country</StyledHeading>
            <Table countries={tableData} />
            <h3>Worldwide new {casesType}</h3>
            <LineGraph casesType={casesType} />
          </div>
        </CardContent>
      </StyledCard>
    </Wrapper>
  );
};

export default StartView;
