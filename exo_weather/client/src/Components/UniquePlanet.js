import PlanetImage from "./PlanetImage";
import DetailedInfo from "./Unique Planet Components/DetailedInfo";
import LocationSelect from "./Unique Planet Components/LocationSelect";
import SummaryInfo from "./Unique Planet Components/SummaryInfo";

const UniquePlanet = () => {
    return ( 
        <>
        <h2>Unique Planet</h2>
        <PlanetImage />
        <SummaryInfo />
        <LocationSelect />
        <DetailedInfo />
        </>
     );
}
 
export default UniquePlanet;