var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  kittens
}
function appendKitten(name){
  return [...kittens, name]
}
function appendKitten(name){
  return [name, ...kittens]
}
