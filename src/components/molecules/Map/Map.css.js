import styled from "styled-components";

export const Wrapper = styled.div`
  height: 500px;
  background-color: white;
  margin: 16px 0 16px 0;
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);
  & .leaflet-container {
    height: 100%;
  }
  .info-flag img {
    width: 100px;
  }
  .info-name {
    font-size: 20px;
    font-weight: bold;
    color: #555;
  }
  .leaflet-popup-content-wrapper {
    background: rgb(37, 38, 82) !important;
  }
  .info-name,
  .info-confirmed,
  .info-recovered,
  .info-deaths {
    color: white;
  }
  .info-container {
    width: 150px;
  }

  .info-flag {
    height: 80px;
    width: 100%;
    background-size: cover;
    border-radius: 8px;
  }

  .info-confirmed,
  .info-recovered,
  .info-deaths {
    font-size: 16px;
    margin-top: 5px;
  }
`;
