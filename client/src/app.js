import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Footer, Loading } from "./components";
import { Home, Profile, ExternalApi, Temperature, Pressure, TempChart, PressChart} from "./views";
import ProtectedRoute from "./auth/protected-route";

import "./app.css";
import Front from "./views/front";
import Weather from "./views/weather";
import HomeReport from "./views/home-report";
import SysReg from "./views/system-regulation";
import HeatReg from "./views/heat-reg";
import CoolReg from "./views/cool-reg";

const App = () => {
  const { isLoading } = useAuth0();
  const { isAuthenticated } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated){
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/external-api" component={ExternalApi} />
          <ProtectedRoute path="/weather" component={Weather} />
          <ProtectedRoute path="/temperature" component={Temperature} />
          <ProtectedRoute path="/pressure" component={Pressure} />
          <ProtectedRoute path="/temp-chart" component={TempChart} />
          <ProtectedRoute path="/press-chart" component={PressChart} />
          <ProtectedRoute path="/home-report" component={HomeReport} />
          <ProtectedRoute path="/system-regulation" component={SysReg} />
          <ProtectedRoute path="/heat-reg" component={HeatReg} />
          <ProtectedRoute path="/cool-reg" component={CoolReg} />
        </Switch>
      </div>
      <Footer />
    </div>
  )} else{
    return(
      <div id="app" className="d-flex flex-column h-100">
        <Front />
      </div>
    )
  };
};

export default App;
