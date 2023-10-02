import React, { Fragment } from "react";
import PressureChart from "../components/pressure-chart";

const PressChart = () => (
  <Fragment>
    <h2>
        Atmospheric pressure history chart
    </h2>
    <PressureChart />
  </Fragment>
);

export default PressChart;