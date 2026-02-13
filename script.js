function getIndexToIns(array, number){
  let sorted = array.sort((a, b) => (a-b));
  const isGreater = (element) =>(element >= number);
  let index = sorted.findIndex(isGreater);
  if(index == -1){
    return sorted.length;
  }
  return index;
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([20, 3, 5], 19));
console.log(getIndexToIns([3, 10, 5], 11));
console.log(getIndexToIns([], 5));