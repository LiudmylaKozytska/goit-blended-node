// node calc.js sum 5 10 20
// node calc.js sub 100 50 25
// node calc.js mult 2 4 6
// node calc.js div 100 50 2

const [operator, ...num] = process.argv.slice(2);
const numbers = num.map((n) => Number(n));

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

const result = calculator(operator, numbers);
console.log(result);
