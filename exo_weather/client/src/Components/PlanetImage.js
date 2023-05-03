const PlanetImage = ({imageUrl, planetName, location}) => {
    return ( 
        <>
          <h3>{planetName}: {location}</h3>
          <img src={imageUrl} alt="image of planet" width="512" height="512"/>
        </>
     );
}
 
export default PlanetImage;