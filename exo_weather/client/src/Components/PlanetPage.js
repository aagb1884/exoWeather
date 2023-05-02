const PlanetPage = () => {



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