import styled from 'styled-components';


const PlanetSelect = ({planets, onPlanetSelect}) => {

    const handleChange = function(event) {
        const chosenPlanetLocation = event.target.value;
        { event.target.value == "" ? doNowt() : onPlanetSelect(chosenPlanetLocation)}
    }

    const doNowt = function() {
      console.log(`busy doing nothing`)
    }

    const planetOptions = planets.map((planet, index) => {
        return <option key={index} value={planet.location}>{planet.planet} - {planet.location}</option>
    })

    return ( 
            <DropdownButton>
                <select class defaultValue="" onChange={handleChange}>
                <option value="">Choose Location</option>
                {planetOptions}
                </select>
            </DropdownButton>
            )
}

const DropdownButton = styled.button`
  background-color: transparent;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;

  select {
    background-color: #f8ab07;
    color: #fff;
    font-family: 'aquire-font', sans-serif;
    width: 300px;
    font-size: 20px;
    justify-content: center;
    cursor: pointer;
    padding: 10px;
    border-radius: 100px;
  }
`;

export default PlanetSelect;