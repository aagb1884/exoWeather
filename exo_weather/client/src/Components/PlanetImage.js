const PlanetImage = ({imageUrl}) => {
    return ( 
        <>
          <h3>3D image of planet</h3>
          <img src={imageUrl} alt="image of planet" />
        </>
     );
}
 
export default PlanetImage;