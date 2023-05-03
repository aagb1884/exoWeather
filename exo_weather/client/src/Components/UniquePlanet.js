import PlanetImage from "./PlanetImage";
import DetailedInfo from "./UniquePlanetComponents/DetailedInfo";
// import LocationSelect from "./UniquePlanetComponents/LocationSelect";
import SummaryInfo from "./UniquePlanetComponents/SummaryInfo";

const UniquePlanet = ({planet}) => {

  // /Users/Claire/CodeClan/homework/exoWeather/exo_weather/client/src/images/mars.png
  // client/src/images/earth.png

    console.log(`Unique: ${planet.planet}, ${planet.image}`)
    // const planetPath = "./mars.png"
    return ( 
        <>
        {/* <PlanetImage imageUrl={planetPath}/> */}
        <PlanetImage imageUrl={require("../images/" + planet.image)} planetName={planet.planet} location={planet.location} />
        <SummaryInfo planet={{...planet}}/>
        {/* <LocationSelect /> */}
        <DetailedInfo />
        </>
     );
}
 
export default UniquePlanet;