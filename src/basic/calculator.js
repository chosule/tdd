class Calculator {
  constructor() {
    this.value = 0;
  }

  set(num) {
    this.value = num;
  }

  clear() {
    this.value = 0;
  }

  add(num) {
    const sum = (this.value = this.value + num);
    if (sum > 100) {
      throw new Error("value can not be greater than 100");
    }
    this.value = sum;
  }

  subtrack(num) {
    this.value = this.value - num;
  }

  multiply(num) {
    this.value = this.value * num;
  }

  divide(num) {
    this.value = this.value / num;
  }
}
module.exports = Calculator;
