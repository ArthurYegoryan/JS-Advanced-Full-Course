const arr = [ 6, 0, 8, 3, 7 ];
const order = "Desc";

function getOrderedArr(arr, order = "Asc") {
  let resultArr = [];
  
  if (order === "Asc") {
    resultArr = arr.sort((a, b) => a - b);
  } else if (order === "Desc") {
    resultArr = arr.sort((a, b) => b - a);
  } else {
    return "Invalid order type!";
  }

  return resultArr;
}

console.log(getOrderedArr(arr));