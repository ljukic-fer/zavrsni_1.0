import React, { Fragment, useEffect, useState } from "react";

const PressList = () => {

    const [pressures, setPressures] = useState([]);

    const getPressures = async () => {
        try {
            const response = await fetch("http://localhost:6060/pressure");
            const jsonData = await response.json();
            setPressures(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getPressures();
    }, []);

    return <Fragment>
        <table class="table mt-5 text-center table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>Time</th>
                    <th>Pressure (hPa)</th>
                </tr>
            </thead>
            <tbody>
                {pressures.map(press => (
                    <tr>
                        <td>{press.hr}</td>
                        <td>{press.val}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>;
};

export default PressList;