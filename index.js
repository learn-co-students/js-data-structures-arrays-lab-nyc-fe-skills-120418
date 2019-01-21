// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(driver){
  drivers.push('Ralph');
} 
function destructivelyPrependDriver(driver){
drivers.unshift('Bob');
}
function destructivelyRemoveLastDriver(driver){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(driver){
  drivers.shift();
}
function appendDriver(driver){
  const allDrivers = [...drivers, 'Broom'];
  return allDrivers;
}

function prependDriver(driver){
  const newDrivers = ['Arnold', ...drivers]
  return newDrivers;
}

function removeLastDriver(driver){
  const oldDrivers = drivers.slice(0,-1);
  return oldDrivers;
}
function removeFirstDriver(driver){
  const otherDriversLeft = drivers.slice(1);
  return otherDriversLeft;
}