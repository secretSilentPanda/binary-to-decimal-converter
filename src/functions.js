export function toDecimal(binary) {
  let binArray = binary
    .toString()
    .split("")
    .map((num) => parseInt(num))
    .reverse();

  const sum = binArray.reduce((prev, current, index) => {
    return prev + current * Math.pow(2, index);
  }, 0);
  return sum;
}

export function toBinary(decimal) {
  let result = [];
  while (decimal > 0) {
    const rem = decimal % 2;
    result.push(rem);
    decimal = Math.floor(decimal / 2);
  }
  return result.reverse().join("");
}
