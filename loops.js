function forLoop(array){
  for(var i = 1; i < 26; i++){
    if (i > 1){
      array.push(`I am ${i} strange loops.`)
    }
    else{
      array.push("I am 1 strange loop.")
    }
  }
  return array
}
function whileLoop(n){
  while (n > 0 ){
    console.log(--n)
  }
  return "done"
}
function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
function doWhileLoop(array){
  do{
    console.log('doo-bee-doo-bee-doo')
  } while (maybeTrue)
}
