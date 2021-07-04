import React from "react";
import { StyledCard, StyledTypography, StyledHeading } from "./InfoBox.css";
import { CardContent } from "@material-ui/core";

const InfoBox = ({
  title,
  cases,
  isTotalCases,
  total,
  active,
  isRed,
  mainPage,
  ...props
}) => (
  <StyledCard onClick={props.onClick}>
    <CardContent>
      <StyledTypography color="textSecondary" gutterBottom>
        {title}
      </StyledTypography>
      <StyledHeading
        className={`infoBox__cases ${isRed && "infoBox__cases--red"}`}
      >
        {cases}
      </StyledHeading>
      <StyledTypography
        className="infoBox__total"
        color="textSecondary"
        style={{ color: "white" }}
      >
        {total} Total
      </StyledTypography>
    </CardContent>
  </StyledCard>
);

export default InfoBox;
