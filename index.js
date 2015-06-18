var assert = require('assert');
var fakeArray = require('../fakearray.js');

// var arr = [1,2,3,4]
//     // lastElem = arr.pop();

// // assert.equal(lastElem, 4, "expected " + lastElem + " to equal 3, but it didn't!" );

// var elem = arr.length

// 	assert.equal(elem, 4, "expected " + elem+ " to equal 4, but it didn't!" );

// var shiftElem= arr.shift()
// 		assert.equal(shiftElem, 1, "expected " + shiftElem + " to equal 3, but it didn't!" );


		// make assertion look like mocha (be mocha)
		// 
		// subsitue actual arrays with fake arrays to test 

describe('My fake array object', function() {
  describe('The pop method', function() {

    before(function() {
      fakeArray[0] = 1;
      fakeArray[1] = 2;
      fakeArray[2] = 3;
      fakeArray.length = 3;
    });

    it('should return the final element', function() {
      assert.equal(fakeArray.pop(), 3);
    });
  });
});