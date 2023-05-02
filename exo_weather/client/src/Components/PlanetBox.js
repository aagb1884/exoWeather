import PlanetPage from "./PlanetPage";
import PlanetSelect from "./PlanetSelect";
import UniquePlanet from "./UniquePlanet";
import React, { useState, useEffect } from 'react';

const PlanetBox = () => {
    const [planets, setPlanets] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    useEffect(() => {
        getPlanets();
    }, [])

    const getPlanets = function(){
        fetch('http://localhost:9000/api/planets/')
        .then(res => res.json())
        .then(planets => setPlanets(planets))
    }

    const onPlanetSelect = function(planetName) {
        const foundPlanet = planets.find((planet) => planet.planet === planetName )
        setSelectedPlanet(foundPlanet)
    }

    return ( 
        <div classname="planet-box">
         <h2>Planet Box</h2>
         <PlanetSelect planets={planets} onPlanetSelect={onPlanetSelect} />
         <UniquePlanet /> 
         <br />
         <PlanetSelect planets={planets} onPlanetSelect={onPlanetSelect} />
         <UniquePlanet /> 
        </div>

     );
}
 
export default PlanetBox;