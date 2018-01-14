var chocolateBars = ['snickers', 'hundred grand', 'katkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

<<<<<<< HEAD
function destructivelyAddElementToBeginningOfArray(array, element) {
=======
function destructivelyAddElementToBeginningOfArray(array, element){
>>>>>>> bf6e5bfd66b2349b7db272f40ce736e380cdc207
  array.unshift(element)
  return array
}

<<<<<<< HEAD
function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)
}
=======

>>>>>>> bf6e5bfd66b2349b7db272f40ce736e380cdc207
