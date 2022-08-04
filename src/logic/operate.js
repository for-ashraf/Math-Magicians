import Big from 'big.js';

export default function operate(numberOne, numberTwo, operator) {
  const one = Big(numberOne);
  const two = Big(numberTwo);

  if (operator === '-') {
    return one.minus(two).toString();
  }
  if (operator === '+') {
    return one.plus(two).toString();
  }
  if (operator === 'x') {
    return one.times(two).toString();
  }
  if (operator === '÷') {
    try {
      return one.div(two).toString();
    } catch (err) {
      return "Can't divide by 0.";
    }
  }
  if (operator === '%') {
    try {
      return one.mod(two).toString();
    } catch (err) {
      return "Can't find modulo as can't divide by 0.";
    }
  }
  throw Error(`Unknown operator '${operator}'`);
}
