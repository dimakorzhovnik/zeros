module.exports = function getZerosCount(number) {
  // your implementation
let zero = 0;
let count = 5;
while (number > count) {
   zero = zero + Math.floor(number / count);
   count = count * 5;
  }
return zero;
}
