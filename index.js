// Write your solution here!
const drivers= [ "Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
drivers.push(name)
}
function destructivelyPrependDriver(name){
  drivers.unshift(name)
}
function destructivelyRemoveLastDriver(name){
  drivers.pop(name)
}
function destructivelyRemoveFirstDriver(name){
drivers.shift(name)  
}
function appendDriver(name){
}
function appendDriver(name){
  let oldDrivers=drivers.slice()
  oldDrivers.push(name)
  return oldDrivers
}

function prependDriver(name) {
 let oldDrivers = drivers.slice()
 oldDrivers.unshift(name)
 return oldDrivers
}

function removeLastDriver() {
 let oldDrivers = drivers.slice()
 oldDrivers.pop(name)
 return oldDrivers
}

function removeFirstDriver() {
 let oldDrivers = drivers.slice()
 oldDrivers.shift(name)
 return oldDrivers
}