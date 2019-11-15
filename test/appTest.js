const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require('../app');

sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);

describe ('App', function(){
  describe('sayHello()', function(){
    it('app should return hello', function(){
      // let result = sayHello();
      assert.equal( sayHelloResult, 'hello');
    });
  
    it('sayHello should return type string', function(){
      // let result = sayHello();
      assert.typeOf( sayHelloResult, 'string');
    });
  
    it('sayHello should return a string of five chars', function(){
      // let result = sayHello();
      assert.lengthOf( sayHelloResult, 5);
    });
  });
  
  describe('addNumbers()', function(){
    it('addNumbers should be above 5', function(){
      // let result = addNumbers(5,5);
      assert.isAbove( addNumbersResult, 5);
    });
  
    it('addNumbers should return type number', function(){
      // let result = addNumbers();
      assert.typeOf( addNumbersResult, 'number');
    });
  });
});