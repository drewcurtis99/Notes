//Binary Search

function binarySearch(target, nums) {
  //Track the left and right side indexes of the number sorted num array
  //while left <= right
    //find the mid index value
    //if value is === target then return true or target value
    //if value is > target then right becomes mid index - 1
    //else left becomes mid index + 1
  //return false

  //Input validation or edge cases
  if (typeof(target) !== "number") {
    return "please provide a number for the target";
  }
  if (!Array.isArray(nums)) {
    return "please provide an array for the nums argument";
  }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let midIndex = Math.floor((left + right) / 2);
    let midValue = nums[midIndex];
    if (midValue === target) {
      return true;
    }
    if (midValue > target) {
      right = midIndex - 1;
    }
    else {
      left = midIndex + 1;
    }
  }

  return false;
}

console.log(binarySearch(1, {1: 1}));



//MergeSort

function mergeSort(array) {
  const half = Math.floor(array.length / 2)
  
  // Base case or terminating case
  if(array.length < 2){
    return array 
  }
  
  //Splice or slice ... I prefer to slice since it doesn't change the input param
  // const left = array.splice(0, half)
  const left = array.slice(0, half);
  const right = array.slice(half);
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

console.log(mergeSort([1, 6, 4, 9, 8, 2, 3]));


/*
  How to implment a Queue class with Linked List
    https://learnersbucket.com/tutorials/data-structures/implement-queue-using-linked-list/
    https://osgoodgunawan.medium.com/stack-and-queue-in-linkedlist-javascript-76ca86dd95fe
*/


