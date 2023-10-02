import React, { Fragment } from "react";
import TempGraph from "../components/temperature-graph";

const TempChart = () => (
  <Fragment>
    <h2>
        Temperature history chart
    </h2>
    <TempGraph />
  </Fragment>
);

export default TempChart;