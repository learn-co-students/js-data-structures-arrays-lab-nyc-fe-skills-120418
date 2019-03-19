// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

 function destructivelyAppendDriver (name) {
 drivers.push(name)
 }
 
 function destructivelyPrependDriver (name) {
   drivers.unshift(name)
 }
 
 function destructivelyRemoveLastDriver (name) {
   drivers.pop(name)
 }

function destructivelyRemoveFirstDriver (name) {
  drivers.shift(name)
}

function appendDriver (name) {
  let driversCopy = drivers.slice()
  driversCopy.push(name)
  return driversCopy
}

function prependDriver (name) {
  let driversCopy = drivers.slice()
  driversCopy.unshift(name)
  return driversCopy
}

function removeLastDriver (name) {
  let driversCopy = drivers.slice()
  driversCopy.pop(name)
  return driversCopy
}

function removeFirstDriver (name) {
  let driversCopy = drivers.slice()
  driversCopy.shift(name)
  return driversCopy
}