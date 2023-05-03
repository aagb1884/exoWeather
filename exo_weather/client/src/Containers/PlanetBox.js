import PlanetPage from "../Components/PlanetPage";
import PlanetSelect from "../Components/PlanetSelect";
import UniquePlanet from "../Components/UniquePlanet";
import React, { useState, useEffect } from 'react';

const PlanetBox = () => {
    const [planets, setPlanets] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    // const [selectedPlanet2, setSelectedPlanet2] = useState(null);

    useEffect(() => {
        getPlanets();
    }, [])

    const getPlanets = function(){
        fetch('http://localhost:9000/api/planets/')
        .then(res => res.json())
        .then(planets => setPlanets(planets))
    }

    const onPlanetSelect = function(planetLocation) {
        const foundLocation = planets.find((planet) => planet.location === planetLocation )
        setSelectedPlanet(foundLocation)
    }

    // const onPlanetSelect2 = function(planetName) {
    //     const foundPlanet = planets.find((planet) => planet.planet === planetName )
    //     setSelectedPlanet2(foundPlanet)
    // }

    return ( 
        <div classname="planet-box">
         <PlanetSelect planets={planets} onPlanetSelect={onPlanetSelect} />
         { selectedPlanet ? <UniquePlanet planet={selectedPlanet}/> : null }
         <br />
         {/* <PlanetSelect planets={planets} onPlanetSelect={onPlanetSelect2} />
         { selectedPlanet2 ? <UniquePlanet planet={selectedPlanet2}/> : null} */}
        </div>

     );
}
 
export default PlanetBox;