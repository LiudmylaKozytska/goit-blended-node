class Calculator {
  constructor(operator, numbers) {
    (this.operator = operator), (this.numbers = numbers);
  }
  calculator(operator, num) {
    switch (operator) {
      case "sum":
        return num.reduce((acc, n) => acc + n);
      case "sub":
        return num.reduce((acc, n) => acc - n);
      case "mult":
        return num.reduce((acc, n) => acc * n);
      case "div":
        return num.reduce((acc, n) => acc / n);

      default:
        return "node operations not recognized";
    }
  }
  init() {
    return this.calculator(this.operator, this.numbers);
  }
}
const [operator, ...num] = process.argv.slice(2);
const numbers = num.map((n) => Number(n));
module.exports = new Calculator(operator, numbers);
