const PlanetSelect = ({planets, onPlanetSelect}) => {

    const handleChange = function(event) {
        const chosenPlanetName = event.target.value;
        { event.target.value == "" ? doNowt() : onPlanetSelect(chosenPlanetName)}
        // onPlanetSelect(chosenPlanetName)
    }

    const doNowt = function() {
      console.log(`busy doing nothing`)
    }

    const planetOptions = planets.map((planet, index) => {
        return <option key={index} value={planet.planet}>{planet.planet} - {planet.location}</option>
    })

    return ( 
            <select defaultValue="" onChange={handleChange}>
                <option value="">Choose Planet</option>
                {planetOptions}
            </select> 
            )
}
 
export default PlanetSelect;