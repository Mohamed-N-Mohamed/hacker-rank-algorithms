// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest

function birthdayCakeCandles(candles) {
  // Write your code here
  let max = Math.max(...candles)
  let res = candles.filter((el) => el === max)
  let results = res.length
  return results
}
