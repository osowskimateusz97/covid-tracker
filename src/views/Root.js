import React, { useState, useEffect } from "react";
import GlobalStyle from "../theme/GlobalStyle";
import { Header } from "components/molecules";
import { InformationContainer, Footer } from "components/organisms";
import { globalData } from "../api";
import { MapView } from "views";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Root = () => {
  const [globalInfo, setGlobalInfo] = useState({});

  useEffect(() => {
    //fetched global cases and set to variable
    const fetchGlobalData = async () => {
      const res = await fetch(globalData);
      const data = await res.json();
      setGlobalInfo(data);
    };
    fetchGlobalData();
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Header />
          <InformationContainer globalCases={globalInfo} />
        </Route>
        <Route path="/map">
          <MapView />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default Root;
