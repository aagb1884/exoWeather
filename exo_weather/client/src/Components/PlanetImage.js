const PlanetImage = ({imageUrl, planetName}) => {
    return ( 
        <>
          <h3>3D image of planet {planetName}</h3>
          <img src={imageUrl} alt="image of planet" />
        </>
     );
}
 
export default PlanetImage;