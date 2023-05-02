import PlanetPage from "../Components/PlanetPage";
import PlanetSelect from "../Components/PlanetSelect";
import UniquePlanet from "../Components/UniquePlanet";
import React, { useState, useEffect } from 'react';

const PlanetBox = ({planet, planets}) => {
   
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    // const [selectedPlanet2, setSelectedPlanet2] = useState(null);


    const onPlanetSelect = function(planetName) {
        const foundPlanet = planets.find((planet) => planet.planet === planetName )
        setSelectedPlanet(foundPlanet)
        console.log(`SelectedPlanet ${foundPlanet.planet}`)
    }

    // const onPlanetSelect2 = function(planetName) {
    //     const foundPlanet = planets.find((planet) => planet.planet === planetName )
    //     setSelectedPlanet2(foundPlanet)
    // }

    return ( 
        <div className="planet-box">
         <h2>Planet Box</h2>
         <PlanetSelect planets={planets} onPlanetSelect={onPlanetSelect} />
         { selectedPlanet ? <UniquePlanet planet={selectedPlanet}/> : null }
         {/* <br />
         <PlanetSelect planets={planets} onPlanetSelect={onPlanetSelect2} />
         { selectedPlanet2 ? <UniquePlanet planet={selectedPlanet2}/> : null} */}
        </div>

     );
}
 
export default PlanetBox;