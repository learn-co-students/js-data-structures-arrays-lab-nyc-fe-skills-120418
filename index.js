const drivers=["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
  drivers.push(name);
}
function destructivelyPrependDriver(name){
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function appendDriver(name){
  const copy=drivers.slice();
  copy.push(name);
  return copy;
}
function prependDriver(name){
  const copy=drivers.slice();
  copy.unshift(name);
  return copy;
}
function removeLastDriver(){
  const copy=drivers.slice();
  copy.pop();
  return copy;
}
function removeFirstDriver(){
  const copy=drivers.slice();
  copy.shift();
  return copy;
}