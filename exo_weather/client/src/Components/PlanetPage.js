const PlanetPage = () => {

    const planetName = "Mars"
    const data = [
        {
            "AT": {
                "avg": -68.4,
                "min": -102.334,
                "max": -10.321
            }
        },
        {
            "PRE": {
                "avg": 1021,
                "min": 1000,
                "max": 1500
            }
        },
        {
            "WS": {
                "avg": 15.3,
                "min": 10.4,
                "max": 20.3
            }
        },
        {
            "WD": {
                "avg": "SSE",
                "min": "E",
                "max": "S"
            }
        },
        {
            "SUN": {
                "rise": "04:32.32",
                "set": "21:21.35"
            }
        },
        {
            "HUM": {
                "avg": null,
                "min": null,
                "max": null
            }
        },
        {
            "UV": {
                "avg": null,
                "min": null,
                "max": null
            }
        },
        {
            "VIS": {
                "avg": null,
                "min": null,
                "max": null
            }
        }]


    return ( 
        <div classname="planet-page">

        <h2>{planetName}</h2>
            <ul>
                <li>
                    Air Temperature:
                        <ul>
                            <li>Average: {data[0].AT.avg}</li>
                            <li>Min: {data[0].AT.min}</li>
                            <li>Max:{data[0].AT.max}</li>
                        </ul>
                </li>
                <li>
                    Precipitation:
                        <ul>
                            <li>Average:</li>
                            <li>Min:</li>
                            <li>Max:</li>
                        </ul>
                </li>
                <li>
                    Windspeed:
                        <ul>
                            <li>Average:</li>
                            <li>Min:</li>
                            <li>Max:</li>
                        </ul>
                </li>
                <li>
                    Wind Direction:
                        <ul>
                            <li>Average:</li>
                            <li>Min:</li>
                            <li>Max:</li>
                        </ul>
                </li>
                <li>
                    Sunrise/Sunset:
                </li>
                <li>
                    Humidity:
                        <ul>
                            <li>Average:</li>
                            <li>Min:</li>
                            <li>Max:</li>
                        </ul>
                </li>
                <li>
                    UV:
                        <ul>
                            <li>Average:</li>
                            <li>Min:</li>
                            <li>Max:</li>
                        </ul>
                </li>
                <li>
                    Visibility:
                        <ul>
                            <li>Average:</li>
                            <li>Min:</li>
                            <li>Max:</li>
                        </ul>
                </li>
            </ul>
        </div>
     );
}
 
export default PlanetPage;