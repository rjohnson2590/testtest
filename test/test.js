var assert = require('assert');
var fakeArray = require('../fakearray.js')
var chai = require('chai');
var expect = chai.expect;


// describe("Length stuff right here",function(){


// var arr = [1,2,3,4]
// //     // lastElem = arr.pop();

// // // assert.equal(lastElem, 4, "expected " + lastElem + " to equal 3, but it didn't!" );
// // 	it('should return [2,3,4,5]',function(){
// // 		expect(arr.map(function(i){
// // 			return i+1
// // 		})).to.have.deep.equal([2,3,4,5])
// // 	})

	// it('should return [2,3,4]', function(){
	// expect(arr.filter(function(i){
	// 	return i>1
	// })).to.have.deep.equal([2,3,4])
	// })
// 	// var result=[]
// 	// before(function(){
// 	// 	arr.forEach(function(elem){
// 	// 	result.push(elem+1)
	
// 	// 	})
// 	// })	

// 	it('should return WHAT I FUCKING WANT', function(){
		
// 		arr.forEach(function(e,i,arr){
// 			arr[i]= e+1
// 			console.log(arr)
// 		})
// 		expect(arr).to.deep.equal([2,3,4,5])
// 	})


// 	// // it('should return 4', function(){
// 	// 	expect(arr.length).to.equal(4)
// 	// });


// 	// 	it('should return 1', function(){
// 	// 	expect(arr.shift()).to.equal(1)
// 	// 	})

// 	// 		it('should return 3 since we shifted, asking for 4', function(){
// 	// 			expect(arr.length).not.equal(4)
// 	// 		})

// 	// 		it('should return 5 after we join',function(){
// 	// 			var str =arr.join(',');
// 	// 			console.log(str)
// 	// 			expect(str.length).to.equal(5)
// 	// 		})

// });


describe('My fake array object', function() {
  describe('The pop method', function() {


    before(function() {
      fakeArray[0] = 1;
      fakeArray[1] = 2;
      fakeArray[2] = 3;
      fakeArray.length = 3;
    });

    function adds(num){
    	return num+1
    }

    function filt(nums){
    	return nums>1
    }

    function fold(a,b){
    	return a+b
    }

    it('should return 6',function (){
    	expect(fakeArray.reduce(fold,0)).to.equal(6)
    })

    // it('should return the final element', function() {
    // 	fakeArray.pop()
    // 	expect(fakeArray.length).to.equal(0)
 
    // });
    // it('should return proper length', function(){
    // 	expect(fakeArray.length).to.equal(5)
    // })
  });
});