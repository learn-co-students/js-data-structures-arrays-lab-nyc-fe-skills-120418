// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(newName) {
  drivers.push(newName)
} 
function destructivelyPrependDriver(newStartName){
  drivers.unshift(newStartName)
}
function destructivelyRemoveLastDriver(removeLastName){
  drivers.pop()
}
function destructivelyRemoveFirstDriver(removeFirstName){
  drivers.shift()
}
function appendDriver(newName){
  let oldDrivers = drivers.slice()
  oldDrivers.push(newName)
  return oldDrivers
}
function prependDriver(newStartName){
  let newDrivers = drivers.slice()
  newDrivers.unshift(newStartName)
  return newDrivers
}
function removeLastDriver(removeLastDriver){
  let newNewDrivers = drivers.slice()
  newNewDrivers.pop()
  return newNewDrivers
}
function removeFirstDriver(removeFirstDriver){
  let oldOldDrivers = drivers.slice()
  oldOldDrivers.shift()
  return oldOldDrivers
}