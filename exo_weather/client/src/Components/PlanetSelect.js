const PlanetSelect = (planets, onPlanetSelect) => {

    const handleChange = function(event) {
        const chosenPlanetName = event.target.value;
        onPlanetSelect(chosenPlanetName)
    }

    const planetOptions = planets.map((planet) => {
        return <option value={planet.name}>{planet.name}</option>
    })

    return ( 
            <select defaultValue="" onChange={handleChange}>
                {planetOptions}
            </select> 
            )
}
 
export default PlanetSelect;