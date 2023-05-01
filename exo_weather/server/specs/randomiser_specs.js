const assert = require('assert');
const {getRandomVal, populateValues} = require('../helpers/randomiser.js');

describe('getRandomVal', function () {

  // let ;

  // beforeEach(function () {
    
  // });

  it('should return a value between 0 and 10', function () {
    const randomVal = getRandomVal(0, 10);
    const actual = (min <= randomVal && randomVal < max)
    assert.strictEqual(actual, true);
  });

}
)