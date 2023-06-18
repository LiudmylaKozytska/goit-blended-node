function calculator(operator, num) {
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

module.exports = calculator;
