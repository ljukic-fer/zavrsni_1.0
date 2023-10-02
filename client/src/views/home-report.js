import React, {useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const HomeReport = () => {

    const [temps, setTemps] = useState([]);
    const [reg, setReg] = useState([]);

    const getTemps = async () => {
        try {
            const response1 = await fetch("http://localhost:6060/int_val");
            const jsonData1 = await response1.json();

            setTemps(jsonData1);
        } catch (err) {
            console.error(err.message)
        }
    }

    const getReg = async () => {
        try {
            const response2 = await fetch("http://localhost:6060/temp_reg_sys");
            const jsonData2 = await response2.json();

            setReg(jsonData2);
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getTemps();
        getReg();
    });

    for (var j=0; j<reg.length; j++) {
        for (var i=0; i<temps.length; i++){
            if (temps[i].variable==="temperature" && temps[i].value>=18 && temps[i].value<=20 && reg[j].component==="system" && reg[j].enabled===0) {
                return (
                    <div className="text-left">
                        <h1>Indoor temperature</h1>
                        <h1>{temps[i].value} °C</h1>
                        <hr></hr>
                        <p>Indoor temperature is ideal and temperature regulation system is currently <b>inactive</b></p>
                    </div>
                );
            }

            else if (temps[i].variable==="temperature" && temps[i].value>=18 && temps[i].value<=20 && reg[j].component==="system" && reg[j].enabled===1) {
                return (
                    <div className="text-left">
                        <h1>Indoor temperature</h1>
                        <h1>{temps[i].value} °C</h1>
                        <hr></hr>
                        <p>Indoor temperature is ideal and temperature regulation system is currently <b>active</b></p>
                        <p>Click the button to turn off the heating/cooling system</p>
                        <NavLink
                            to="/system-regulation"
                            exact className="nav-link NavButton hero"
                            activeClassName="router-link-exact-active">
                                Regulate
                        </NavLink>
                    </div>
                );
            }

            else if(temps[i].value < 18 && reg[j].component==="heating" && reg[j].enabled===0) {
                return (
                    <div className="text-left">
                        <h1>Indoor temperature</h1>
                        <h1>{temps[i].value} °C</h1>
                        <hr></hr>
                        <p>Temperature is <b>not</b> being regulated</p>
                        <p>Click the button to turn on heating</p>
                        <NavLink
                            to="/heat-reg"
                            exact className="nav-link NavButton hero"
                            activeClassName="router-link-exact-active">
                            Regulate
                        </NavLink>
                    </div>
                );
            }

            else if (temps[i].value > 20 && reg[j].component==="cooling" && reg[j].enabled===0){
                return (
                    <div className="text-left">
                        <h1>Indoor temperature</h1>
                        <h1>{temps[i].value} °C</h1>
                        <hr></hr>
                        <p>Temperature is <b>not</b> being regulated</p>
                        <p>Click the button to adjust your settings</p>
                        <NavLink
                            to="/cool-reg"
                            exact className="nav-link NavButton hero"
                            activeClassName="router-link-exact-active">
                            Regulate
                        </NavLink>
                    </div>
                );
            }


            else if (temps[i].variable==="temperature" && reg[j].component==="system" && reg[j].enabled===1) {
                for (var m=0; m<reg.length; m++) {
                    if ((temps[i].value > 20 && reg[m].component==="cooling" && reg[m].enabled===1) || 
                        (temps[i].value < 18 && reg[m].component==="heating" && reg[m].enabled===1)) {
                            return (
                                <div className="text-left">
                                    <h1>Indoor temperature</h1>
                                    <h1>{temps[i].value} °C</h1>
                                    <hr></hr>
                                    <p>Temperature is being regulated</p>
                                    <p>{reg[m].component} system is currently active</p>
                                </div>
                            );
                    }


                    else if(temps[i].value < 18 && reg[m].component==="heating" && reg[m].enabled===0) {
                        return (
                            <div className="text-left">
                                <h1>Indoor temperature</h1>
                                <h1>{temps[i].value} °C</h1>
                                <hr></hr>
                                <p>Temperature is <b>not</b> being regulated</p>
                                <p>Click the button to turn on heating</p>
                                <NavLink
                                    to="/heat-reg"
                                    exact className="nav-link NavButton hero"
                                    activeClassName="router-link-exact-active">
                                    Regulate
                                </NavLink>
                            </div>
                        );
                    }

                    else if (temps[i].value > 20 && reg[m].component==="cooling" && reg[m].enabled===0){
                        return (
                            <div className="text-left">
                                <h1>Indoor temperature</h1>
                                <h1>{temps[i].value} °C</h1>
                                <hr></hr>
                                <p>Temperature is <b>not</b> being regulated</p>
                                <p>Click the button to adjust your settings</p>
                                <NavLink
                                    to="/cool-reg"
                                    exact className="nav-link NavButton hero"
                                    activeClassName="router-link-exact-active">
                                    Regulate
                                </NavLink>
                            </div>
                        );
                    }
                }
            }
            
            
            
            
            else {
                
            }
        }
    }
    return(
        <p></p>
    )
}

    /**
    for (var i=0; i<temps.length; i++){
        if (temps[i].variable=="temperature") {
            return (
                <div className="text-left">
                    <h1>Internal temperature</h1>
                    <h1>{temps[i].value} °C</h1>
                    <hr></hr>
                </div>

            );
        }
    }
    return(
        <p></p>
    )
};
*/


/**
const HomeReport = () => {

    const [temps, setTemps] = useState([]);

    const getTemps = async () => {
        try {
            const response1 = await fetch("http://localhost:6060/int_val");
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
        if (temps[i].variable=="temperature") {
            return (
                <div className="text-left">
                    <h1>Internal temperature</h1>
                    <h1>{temps[i].value} °C</h1>
                    <hr></hr>
                </div>

            );
        }
    }
    return(
        <p></p>
    )
};
*/


/**
const Profile = () => {
  const { user } = useAuth0();
  const { nickname, picture, email, email_verified } = user;

  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{nickname}'s profile data</h2>
        </div>
      </div>
      <div className="lead">
        email: {email}
        <br></br>
        email verified: {{email_verified} ? "Yes" : <Blink color='red' text='No' fontSize='20'>
        </Blink>}
      </div>
    </div>
  );
};
*/

export default HomeReport;
