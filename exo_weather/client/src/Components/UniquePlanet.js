import PlanetImage from "./PlanetImage";
import DetailedInfo from "./UniquePlanetComponents/DetailedInfo";
import LocationSelect from "./UniquePlanetComponents/LocationSelect";
import SummaryInfo from "./UniquePlanetComponents/SummaryInfo";

const UniquePlanet = ({planet}) => {

  // /Users/Claire/CodeClan/homework/exoWeather/exo_weather/client/src/images/mars.png
  // client/src/images/earth.png

    console.log({planet})
    const planetPath = "./mars.png" 
    // + planet.image
    return ( 
        <>
        <h2>Unique Planet</h2>
        <PlanetImage imageUrl={planetPath}/>
        <SummaryInfo />
        <LocationSelect />
        <DetailedInfo />
        </>
     );
}
 
export default UniquePlanet;