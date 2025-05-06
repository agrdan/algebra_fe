function findMax(numbers) {
  if (numbers == null || numbers == undefined) {
    throw new Error("Array cannot be null or undefined");
  }
  var max = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

module.exports = findMax;