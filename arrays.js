function addElementToBeginningOfArray(arr, ele) {
  var arr2 = []
  arr2 = [ele, ...arr]
  return arr2
}

function destructivelyAddElementToBeginningOfArray(arr, ele){
  arr = arr.unshift(ele)
  return arr
}

function addElementToEndOfArray(arr, ele) {
  var arr3=[]
  arr3 = [...arr, ele]
  return arr3
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  arr = arr.push(ele)
  return arr
}

function accessElementInArray(arr, n) {
  return arr[n];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  var slice = arr.slice(0)
  return slice
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  var slice2 = arr.slice(0, arr.length-1)
  return slice2
}