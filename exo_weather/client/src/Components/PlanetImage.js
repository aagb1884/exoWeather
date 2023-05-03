<<<<<<< HEAD
import styled, { keyframes } from 'styled-components';

const PlanetImage = ({imageUrl, planetName, location}) => {
  return (
    <ImageWrapper>
      <h3>{planetName}: {location}</h3>
      <RotateImage src={imageUrl} alt="image of planet" width="512" height="512" />
    </ImageWrapper>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RotateImage = styled.img`
  animation: ${rotate} 120s linear infinite;
`;

export default PlanetImage;
=======
const PlanetImage = ({imageUrl, planetName, location}) => {
    return ( 
        <>
          <h3>{planetName}: {location}</h3>
          <img src={imageUrl} alt="image of planet" width="512" height="512"/>
        </>
     );
}
 
export default PlanetImage;
>>>>>>> main
