import React, {Component, useEffect, useState } from "react";
import {NavLink} from "react-router-dom";

const Weather = () => {

    const [temps, setTemps] = useState([]);

    const getTemps = async () => {
        try {
            const response1 = await fetch("http://localhost:6060/ext_temp");
            const jsonData1 = await response1.json();

            setTemps(jsonData1);
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getTemps();
    });

    for (var i=0; i<temps.length; i++){
            if (temps[i].ind==0) {
                return (
                    <div className="text-left">
                        <h1>Current weather</h1>
                        <h1>{temps[i].val} °C</h1>
                        <hr></hr>
                        <h2><NavLink
                                to="/temperature"
                                exact className="nav-link NavButton"
                                activeClassName="router-link-exact-active">
                                24-hour temperature report
                            </NavLink>
                        </h2>
                        <br></br>
                        <h2><NavLink
                                to="/pressure"
                                exact className="nav-link NavButton"
                                activeClassName="router-link-exact-active">
                                24-hour atmospheric pressure report
                            </NavLink>
                        </h2>
                    </div>

                );
            }
        }
    return(
        <p></p>
    )
};

export default Weather;
