function hasTargetSum(array, target) {
  for(i=0; i < array.length; i++){
    for (j=i+1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true
      }
    }
  }
  return false
}

/* 
  Big O time complexity = 0(n2)
*/

/* 
  Build two loops, one where the counter begins at the index of the first item in the array, 
  and the second where the counter begins at the index of the second item in the array
  Then, build an if statement that checks if the sum of any two numbers in the array equals the target
*/

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
