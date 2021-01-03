import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases,isTotalCases, total, active, isRed,mainPage, ...props }) {

  return (
    <Card
      style={{backgroundColor:'#252652'}}
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography color="textSecondary"  style={{color:'white'}} gutterBottom>
          {title}
        </Typography>
        <h2 style={isTotalCases? {color:'#ffe6b3'}:null} className={`infoBox__cases ${isRed && "infoBox__cases--red"}`}>
          {cases}
        </h2>
        <Typography className="infoBox__total" color="textSecondary"  style={{color:'white'}}>
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
