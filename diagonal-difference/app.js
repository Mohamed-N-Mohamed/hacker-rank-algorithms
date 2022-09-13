//Given a square matrix, calculate the absolute difference between the sums of its diagonals.
function diagonalDifference(arr) {
  let answer = [0, 0]
 
  for(let i = 0; i < arr.length; i ++){
    let a = arr[i][i]
    let b = arr[i][arr.length - 1 - i]
   
    answer = [answer[0] + a, answer[1] + b]

  }


  let results = Math.abs(answer[0] -  answer[1])
  console.log(results);


 

}


diagonalDifference([[1,2,3], [4,5,6], [9,8,9]])