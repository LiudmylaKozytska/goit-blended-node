const [operator, ...num] = process.argv.slice(2);
const numbers = num.map((n) => Number(n));

module.exports = {
  operator,
  numbers,
};
