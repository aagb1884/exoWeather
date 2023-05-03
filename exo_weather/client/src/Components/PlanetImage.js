const PlanetImage = ({imageUrl, planetName}) => {
    return ( 
        <>
          <h3>{planetName}</h3>
          <img src={imageUrl} alt="image of planet" width="512" height="512"/>
        </>
     );
}
 
export default PlanetImage;