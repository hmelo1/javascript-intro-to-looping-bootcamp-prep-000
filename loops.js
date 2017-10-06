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
functions