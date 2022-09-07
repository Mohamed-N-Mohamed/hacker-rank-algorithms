// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

function simpleArraySum(){
  let results = 0
    
  for(let i = 0; i < arr.length; i++){
      results += arr[i]
  }
  
  return results
}

simpleArraySum([1, 2, 3, 4, 10, 11])