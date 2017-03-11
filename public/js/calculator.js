var Calculator = function(){
  this.previousOperator = null; // the last operator the user clicked
  this.previousTotal = 0;       // the total of the previous operation
  this.newTotal = true;         // whether the previous operation has just been calculated
  this.runningTotal = 0;        // the current value to operate on the previous total
}

Calculator.prototype = {

  add: function(number){
    this.runningTotal = parseFloat(this.previousTotal) + parseFloat(number);
  },

  subtract: function(number){
    this.runningTotal = parseFloat(this.previousTotal) - parseFloat(number);
  },

  multiply: function(number){
    this.runningTotal = parseFloat(this.previousTotal) * parseFloat(number);
  },

  divide: function(number){
    this.runningTotal = parseFloat(this.previousTotal) / parseFloat(number);
  },

  numberClick: function(number) {

    // when a number is clicked, if a previous operation has just been completed,
    // or there is a zero in the running total, clear the running total, and reset
    // the `newTotal` flag

    if (this.runningTotal == 0 || this.newTotal) {
      this.runningTotal = '';
      this.newTotal = false;
    }
    // concatenate the clicked number to the running total
    this.runningTotal = parseFloat('' + this.runningTotal + number);

  },

  operatorClick: function(operator) {

    // if there was a previous operator recorded as having been clicked, perform
    // the operation for the previous operator
    if (this.previousTotal && this.previousOperator) {
      switch (this.previousOperator) {
        case ('+'):
        this.add(this.runningTotal);
        break;
        case ('-'):
        this.subtract(this.runningTotal);
        break;
        case ('*'):
        this.multiply(this.runningTotal);
        break;
        case ('/'):
        this.divide(this.runningTotal);
        break;
      }
    }

    // if the 'equals' button was clicked, clear the previous operator, otherwise
    // record what the previous operator was
    if (operator == '=') {
      this.previousOperator = null;
    } else {
      this.previousOperator = operator;
    }
    // replace the previous total with the current running total and flag that a
    // new total has been calculated

    this.previousTotal = this.runningTotal;
    this.newTotal = true;
  },

  clearClick: function() {
    if (this.runningTotal == 0) {
      this.previousOperator = null;
      this.previousTotal = null;
    }
    this.runningTotal = 0;
  }

};

if (typeof module != 'undefined'){ module.exports = Calculator };
