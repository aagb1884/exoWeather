const PlanetSelect = ({planets, onPlanetSelect}) => {
    console.log(planets)
    const handleChange = function(event) {
        const chosenPlanetName = event.target.value;
        onPlanetSelect(chosenPlanetName)
    }

    const planetOptions = planets.map((planet, index) => {
       console.log(planet.planet)
        return <option key={index} value={planet.planet}>{planet.planet}</option>
    })

    return ( 
            <select defaultValue="" onChange={handleChange}>
                {planetOptions}
            </select> 
            )
}
 
export default PlanetSelect;