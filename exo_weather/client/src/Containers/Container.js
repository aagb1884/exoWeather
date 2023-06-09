import PlanetBox from "../Containers/PlanetBox";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const Container = () => {
//   const [planets, setPlanets] = useState([]);

//   useEffect(() => {
//     getPlanets();
//   }, [])

//   const getPlanets = function(){
//     fetch('http://localhost:9000/api/planets/')
//     .then(res => res.json())
//     .then(planets => setPlanets(planets))
// }

  // const planetBoxes = planets.map((planet, index, planets) => {
  //   return <PlanetBox key={index} planet={planet} planets={planets}/>
  // })
    return ( 
      <Wrapper>
        <PlanetBox key={0} />
        <PlanetBox key={1} />
      </Wrapper>
     );
}

const Wrapper = styled.div`
display: flex;
align-items: flex-start;
flex-wrap: wrap;
justify-content: space-between;
padding-top: 15px;
padding-left: 1%;
padding-right: 1%;
margin-top: 1rem;

> * {
    flex: 1;

  };
`
 
export default Container;