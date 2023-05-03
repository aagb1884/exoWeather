const PlanetSelect = ({planets, onPlanetSelect}) => {

    const handleChange = function(event) {
        const chosenPlanetLocation = event.target.value;
        { event.target.value == "" ? doNowt() : onPlanetSelect(chosenPlanetLocation)}
        // onPlanetSelect(chosenPlanetName)
    }

    const doNowt = function() {
      console.log(`busy doing nothing`)
    }

    const planetOptions = planets.map((planet, index) => {
        return <option key={index} value={planet.location}>{planet.planet} - {planet.location}</option>
    })

    return ( 
            <select defaultValue="" onChange={handleChange}>
                <option value="">Choose Location</option>
                {planetOptions}
            </select> 
            )
}
 
export default PlanetSelect;