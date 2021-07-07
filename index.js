// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"] 
function destructivelyAppendDriver (name) {
  drivers.push(name) 
}
function destructivelyPrependDriver (name){
  drivers.unshift(name)
}
function destructivelyRemoveLastDriver (name) {
  drivers.pop(name)
}
function destructivelyRemoveFirstDriver (name) {
  drivers.shift(name)
}


function appendDriver(name) {
  const newDrivers = drivers.slice()
  newDrivers.push(name)
  return newDrivers
}
function prependDriver(name) {
  const newDrivers = drivers.slice()
  newDrivers.unshift(name)
  return newDrivers
}
function removeLastDriver(name) {
  const newDrivers = drivers.slice()
  newDrivers.pop(name)
  return newDrivers
}
function removeFirstDriver(remove) {
  const newDrivers = drivers.slice()
  newDrivers.shift(name)
  return newDrivers
}