//1st way to declare array
const myArray=[1,2,3,4,5,6] //there can be mltiple datatype element present in a single array
const myHeroes=["shaktiman","superman"]

//2nd way to declare array
 const myArr=new Array(1,2,3,4)
 console.log(myArr)
 console.log(myArr[1]) //print elelment in an array

 myArr.push(6) //push elelemt at the end of the array
 console.log(myArr)

 myArr.pop() //pop last ellemt of the array

 myArr.unshift(0) //push an elemet at the start of the array

 myArr.shift() //pop element from the start of the array

 console.log(myArr.includes(9)) //checks whether 9 exist in the array or not

 console.log(myArr.indexOf(9)) // prints the index of the element

 const newArr=myArr.join() //coverts the array into string
 console.log(typeof newArr)  //returns string


 //slice and splice
 console.log("A",myArr) //prints A and array together side by side 

 const newArray=myArr.slice(1,3) //prints array from index 1 to index 2
 const newArray2=myArr.splice(1,3) //prints array from index 1 to 3 and removes the elements from the original array