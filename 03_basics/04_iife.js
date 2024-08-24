//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

//Named IIFE
(function chai(){
    console.log(`db connected`)
})(); //<-- we use semcol when we write two types of iife in ine program

//UNNAMED IIFE
( (name)=>{
    console.log(`db connected 2 as ${name}`)
})('Animesh')
// we use iife to remove global scope poluttion of the variables.it executes immediately