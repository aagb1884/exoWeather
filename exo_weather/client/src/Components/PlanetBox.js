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

    }

    const onPlanetSelect = function(planetName) {
        const foundPlanet = planets.find((country) => planet.name === planetName )
        setSelectedPlanet(foundPlanet)
    }



    return ( 
        <>
         <h2>Planet Box</h2>
         <UniquePlanet />
         <PlanetSelect planets={planets} onPlanetSelect={onPlanetSelect}/>
        </>
     );
}
 
export default PlanetBox;