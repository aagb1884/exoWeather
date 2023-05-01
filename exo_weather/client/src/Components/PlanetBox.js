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
        <>
         <h2>Planet Box</h2>
         <PlanetSelect planets={planets} onPlanetSelect={onPlanetSelect} />
         <UniquePlanet /> 
        </>
     );
}
 
export default PlanetBox;