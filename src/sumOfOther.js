module.exports = function sumOfOther(arr) {
  const arrN = [];
  for (let j = 0; j < arr.length; j += 1) {
    arrN.push(arr.reduce((s, i) => s + i) - arr[j]);
  }

  return arrN;
};
