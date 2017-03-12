var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('can multiply 3x5 and get 15', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, 15)
  });

  it('can divide 21/3 and get 7', function() {
    calculator.previousTotal = 21;
    calculator.divide(3);
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, 7)
  });

  it('can add 1+4 and get 5', function() {
    calculator.previousTotal = 1;
    calculator.add(4);
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, 5)
  });

  it('can subtract 7-4 and get 3', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, 3)
  });

  it('can concatenate multiple number button clicks', function() {
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    assert.equal(calculator.runningTotal, '1234')
  });

  it('can chain multiple operations together', function() {
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('/');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, '1.5')
  });

  it('clear the running total without affecting the calculation', function() {
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, '4')
  });



});
