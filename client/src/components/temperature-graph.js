import React, {useEffect, useState } from "react";
import {Line} from "react-chartjs-2";

const TempGraph = () => {
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

    let x=[];
    let y=[];
    

    for (var i=0; i<temps.length; i++){
        x.push(temps[i].hr);
        y.push(temps[i].val);
    }



    return(
        <div>
            <Line
                data={{
                    labels: x,
                    datasets: [{
                        label: "Temperature",
                        data: y,
                        backgroundColor: "#EC7063 ",
                    }]
                }}
                height={400}
                width={600}
                options={{maintainAspectRatio: false}}
            />
        </div>
    )
};

export default TempGraph;