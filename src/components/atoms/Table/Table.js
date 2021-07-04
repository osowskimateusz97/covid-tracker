import React from "react";
import "./Table.css.js";
import numeral from "numeral";
import { Wrapper, Table, Tr, Td } from "./Table.css";

const TableComponent = ({ countries }) => {
  return (
    <Wrapper>
      <Table>
        {countries.map((country) => (
          <Tr>
            <Td>{country.country}</Td>
            <Td>
              <strong>{numeral(country.cases).format("0,0")}</strong>
            </Td>
          </Tr>
        ))}
      </Table>
    </Wrapper>
  );
};

export default TableComponent;
