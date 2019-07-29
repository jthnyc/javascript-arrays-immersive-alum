var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

chocolateBars.push("merci")
chocolateBars.unshift("hershey's")

function addElementToBeginningOfArray(arr, ele) {
  var arr2 = []
  arr2 = [ele, ...arr]
  return arr
}

function destructivelyAddElementToBeginningOfArray(arr, ele){
  arr = arr.unshift(ele)
  return arr
}