//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.


function miniMaxSum(arr) {
  // Write your code here
  let min = 0; 
  let max = 0
  
  arr.sort()
  arr.slice(1, 5).forEach((el) => {
    max += el
  })

  arr.slice(0, 4).forEach((el) => {
  min += el

  })

console.log(min, max);

}