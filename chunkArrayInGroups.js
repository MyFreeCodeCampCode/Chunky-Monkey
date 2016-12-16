
function chunkArrayInGroups(arr, size) {
  var newArray = [];
  
  while (arr.length !== 0) {
     newArray.push(arr.splice (0, size)); 
  }
  return newArray;
}
//test case
//chunkArrayInGroups(["a", "b", "c", "d"], 2);
