import PlanetBox from "../Containers/PlanetBox";
import React, { useState, useEffect } from 'react';


const Container = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets();
  }, [])

  const getPlanets = function(){
    fetch('http://localhost:9000/api/planets/')
    .then(res => res.json())
    .then(planets => setPlanets(planets))
}

  const planetBoxes = planets.map((planet, index, planets) => {
    return <PlanetBox key={index} planet={planet} planets={planets}/>
  })
    return ( 
      <>
        {planetBoxes}
      </>
     );
}
 
export default Container;