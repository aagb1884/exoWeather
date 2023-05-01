
const Randomiser = {

  
  getRandomVal(min, max) {
    // return Math.floor(Math.random() * max);
    return Math.random() * (max - min) + min;
  },  
  
  populateValues(min, max) {
    const validArray = []
    for (let i = 0; i <= 18; i++){
      validArray.push(getRandomVal(min, max))
    }
    return validArray
  }
  
}

export default Randomiser;