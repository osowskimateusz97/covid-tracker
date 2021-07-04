import React, { useState } from "react";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  StyledWrapper,
  Image,
  HeaderMsgContainer,
  StyledParagraph,
  StyledFontAwesomeIcon,
} from "./Header.css";

const Header = () => {
  const [isActive, setActive] = useState(false);

  const changeHeader = (type) => {
    if (type === "out") {
      return setActive(false);
    }
    setActive(true);
  };
  return (
    <StyledWrapper>
      <Image isActive={isActive} />
      <Link style={{ textDecoration: "none", color: "white" }} to="/map">
        <HeaderMsgContainer
          isActive={isActive}
          onMouseOut={() => changeHeader("out")}
          onMouseOver={changeHeader}
        >
          <StyledParagraph isActive={isActive}>FULL SCREEN MAP</StyledParagraph>
          <StyledFontAwesomeIcon isActive={isActive} icon={faGlobeEurope} />
        </HeaderMsgContainer>
      </Link>
    </StyledWrapper>
  );
};

export default Header;
