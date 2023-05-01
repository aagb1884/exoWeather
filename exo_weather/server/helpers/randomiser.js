
const Randomiser = {

  
  getRandomVal(min, max) {
    const result = Math.random() * (max - min) + min;
    console.log (`getRandomVal: ${result}`)
    return result;
  },  
  
  populateValues(min, max) {
    const validArray = []
    for (let i = 0; i <= 18; i++){
      validArray.push(getRandomVal(min, max))
    }
    console.log(`populateValues: ${validArray}`)
    return validArray
  }
  
}

export default Randomiser;