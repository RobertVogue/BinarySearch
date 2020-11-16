/*******************************************************************
While you are working on the following problems, it DEFINITELY HELPS to
visualize these things in action, so use the below arrays as example inputs.

[1, 2, 3, 4, 5, 6, 7, 8, 9]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*******************************************************************/


/*******************************************************************
BINARY SEARCH VERSION 1:

Write a Recursive Binary Search that returns a Boolean value indicating if
targetNum is within the nums array.
*******************************************************************/

const recurBSearch = (nums, targetNum) => {
  if (nums.length === 0) return false;

  let middle = nums[Math.floor(nums.length/2)]
  let right = nums.slice(Math.floor(nums.length/2 + 1))
  let left = nums.slice(0, Math.floor(nums.length/2))

  if (targetNum == middle) return true;

  if (targetNum < middle) {
    return recurBSearch(left, targetNum)
  } else if (targetNum > middle){
    return recurBSearch(right, targetNum)
  }
  return false

  // if nums has no length, return false because we've run out of items to
  // search and haven't found targetNum

  // determine the slice point

  // create "left half" and "right half" arrays

  // if targetNum is less than the slice point, return this search on the left
  // half

  // if targetNum is greater than the slice point, return this search on the
  // right half

  // if it's not greater than or less than, we know it's equal so return true
}

const oddNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const evenNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// TEST CASES FOR BINARY SEARCH VERSION 1: Recursive Binary Search that returns
// a Boolean Value indicating if targetNum is within the nums array.
// TESTS WITH ODD NUMBER OF ELEMENTS
console.log("PROBLEM 1 RESULTS:")
console.log("ODD NUMBER OF ELEMENTS")
console.log("Your Result: " + recurBSearch(oddNums, 0));
console.log("Your Result: " + recurBSearch(oddNums, 2));
console.log("Your Result: " + recurBSearch(oddNums, 5));
console.log("Your Result: " + recurBSearch(oddNums, 7));
console.log("Your Result: " + recurBSearch(oddNums, 10));
console.log("Your Result: " + recurBSearch(evenNums, 0));
console.log("Your Result: " + recurBSearch(evenNums, 2));
console.log("Your Result: " + recurBSearch(evenNums, 5));
console.log("Your Result: " + recurBSearch(evenNums, 7));
console.log("Your Result: " + recurBSearch(evenNums, 10));
/*******************************************************************
BINARY SEARCH VERSION 2:

Write an Iterative Binary Search that returns a Boolean value indicating if
targetNum is within the nums array.
*******************************************************************/

const iterBSearch = (nums, targetNum) => {
  // Save references to the beginning, middle, and end of the array into
  // variables: lowerIdx, midIdx, and upperIdx
  if ( nums.length === 0) return false

  let middle = nums[Math.floor(nums.length/2)]
  let right = nums.slice(Math.floor(nums.length/2 + 1))
  let left = nums.slice(0, Math.floor(nums.length/2))

  for ( let i = 0; i < right.length; i++ ) {
    let el = right[i]
    if ( el == targetNum ) return true
  }
  for ( let i = 0; i < left.length; i++ ) {
    let el = left[i]
    if ( el == targetNum ) return true
  }

  if (targetNum == middle) return true
  return false


  // while the lowerIdx is less than or equal to the upperIdx, there are still
  // values to be searched

  // reassign the midIdx to the the middle of the new lower and upper indices

  // if targetNum is larger than the value in the middle, we know targetNum is
  // not between the current lower and current middle, so raise the lowerIdx
  // value

  // if targetNum is less than the value in the middle, we know targetNum is not
  // between the current upper and current middle, so lower the upperIdx

  // if it's not greater than or less than, we have found our target at the
  // midIdx and can return true and stop iterating.

  // if we finish iterating and haven't returned true, we've looked over the
  // entire array and didn't find targetNum, so return false
}


/*******************************************************************
BINARY SEARCH VERSION 3:

Write a Recursive Binary Search that returns the Index value of targetNum if it
is in the nums array, and -1 if it is not found.
*******************************************************************/
// const evenNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// [7, 8, 9, 10]
// original index = 6
// current index = 0
// middle was 5

const recurBSearchIdx = (nums, targetNum) => {
  if (nums.length === 0) return -1;
  let middleInd = Math.floor(nums.length/2)
  let middle = nums[middleInd]
  let right = nums.slice(middleInd + 1)
  let left = nums.slice(0, middleInd)

  // if (targetNum == middle) return Math.ceil(nums.length/2);

  if (targetNum < middle) {
    return recurBSearchIdx(left, targetNum)
  } else if(targetNum > middle) {
    let currInd = recurBSearchIdx(right, targetNum)
    if (currInd == -1) return -1
    return currInd + middleInd + 1
  } else {
    return middleInd
  }




  // this implementation is identical to version 1, except rather than
  // returning true/false, return the index where you found the item
  // (instead of true) or -1 (instead of false).

  // HINT: the index value you return should be the index in the ORIGINAL array
  // and not the index of the sliced array. Think about how you can calculate
  // this.
}


/*******************************************************************
BINARY SEARCH VERSION 4:

Write a Recursive Binary Search that returns the Index value of targetNum if it
is in the nums array, and -1 if it is not found.
*******************************************************************/

const recurBSearchIdxV2 = (nums, targetNum, low = null, hi = null) => {
  /*
  This implementation is recursive, but borrows the low/hi logic from Version 2
  to establish a different base case. Rather than shrinking the array until its
  length is 0, this implementation passes in low and hi indices to determine
  what part of the original array is being searched.

  Base Case:
  if low is equal to high and we haven't found targetNum, then return -1 to
  indicate that the value was not found

  Determine the slice point (the middle of lower and upper)

  If targetNum is less than nums[slicepoint], then
  return the binary search of nums passing in low and hi pointing at the
  'left' half of the array

  If targetNum is less than nums[slicepoint], then
  return the binary search of nums passing in low and hi pointing at the
  'right' half of the array

  If neither of those is true, return the slice point
  */
}


/*******************************************************************
BINARY SEARCH VERSION 5:

Write an Iterative Binary Search that returns the Index value of targetNum if
it is in the nums array, and -1 if it is not found.
*******************************************************************/

const iterBSearchIdx = (nums, targetNum) => {
  // this is the exact same as Version 2, but return the index or -1 rather than
  // true or false
}

module.exports = {
  recurBSearch,
  iterBSearch,
  recurBSearchIdx,
  recurBSearchIdxV2,
  iterBSearchIdx
};
