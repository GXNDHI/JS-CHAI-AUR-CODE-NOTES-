const hero=["thor","ironman","captain"]
const hero2=["superman","aqua"]


hero.push(hero2) //this creates an array inside an array an the whole array inside the array is considered as a single element of the array

hero.concat(hero2) //this perfectly joins two array and returns a new array

const allHero = [...hero,...hero2] //SPREAD OPERATOR(...)
//this first breaks the array into individual element 


const array2=[1,2,3,[4,5,6],[7,[8,9]]] //MULTIPLE ARRAY
 const arr = array2.flat(Infinity) //this makes the above array a single array

 console.log(Array.from("GANDHI")) //creates an array of string 


 let a=1
 let b=2
 let c=3
 console.log(Array.of(a,b,c)) //this creates an array from the set of elements 5
