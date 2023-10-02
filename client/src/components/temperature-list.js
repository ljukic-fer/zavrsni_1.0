import React, { Fragment, useEffect, useState } from "react";

const TempList = () => {

    const [temps, setTemps] = useState([]);

    const getTemps = async () => {
        try {
            const response = await fetch("http://localhost:6060/ext_temp");
            const jsonData = await response.json();
            setTemps(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getTemps();
    }, []);

    return <Fragment>
        <table class="table mt-5 text-center table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>Time</th>
                    <th>Temperature (°C)</th>
                </tr>
            </thead>
            <tbody>
                {/*<tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>*/}
                {temps.map(temp => (
                    <tr>
                        <td>{temp.hr}</td>
                        <td>{temp.val}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>;
};

export default TempList;