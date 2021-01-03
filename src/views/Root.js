import React,{useState,useEffect} from 'react';
import GlobalStyle from '../theme/GlobalStyle';
import Header from '../components/molecules/Header/Header';
import InformationContainer from '../components/organisms/InformationContainer/InformationContainer';
import Footer from '../components/organisms/Footer/Footer';
import {globalData} from '../api';
import UserView from './UserView';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
function Root() {

  const [globalInfo,setGlobalInfo] = useState({});

  useEffect(()=>{
    //fetched global cases and set to variable
    const fetchGlobalData = () =>fetch(globalData)
    .then(res=>res.json())
    .then(data=>setGlobalInfo(data))
 
    fetchGlobalData();
  },[])
  
  return (
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route path="/" exact>
      <Header/>
      <InformationContainer globalCases={globalInfo}/>
      </Route>
      <Route path="/map">
        <UserView/>
      </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default Root;
