//FUNCTION SYNTSX
function NAME (){
    console.log(" ")
}
NAME() //executon

//EXAMPLE
function addNum (num1,num2){
    console.log(num1+num2)
    let result = num1+num2
    return result  //we have to retum the result if we want to access the result value outside the curly braces
    console.log("ANimesh")  //this line never gets executed because once the return statement is called the execution of the function stops
}
addNum(1,2)


function calculateCartPrice(...num1){ //... REST OPERATOR here
    return num1
}
console.log(calculateCartPrice(2,2,3,4,5)) //we will get this in array form


function calculate(val1,val2,...num){ //first val goes to val1,second goes to val2 and the rest in num
    return num
}


//ACCESSING OBJECT VALUES THROUGH FUNCTION

const user={
    name:"ANIMESH",
    price : 162
}

function access(object_name){
    console.log(`Username is ${object_name.name} and price is ${object_name.price}`)
}
access(user)  //We get user.name = ANIMESH and user.price = 162
access({
    name :" ",
    price:
}) //we can directly pass our own object to be accessed


//ACCESSING ARRAY THROUGH FUNCTION
const myArr=[100,200,300]
function getArr(getArray){
    return getArray[1]
}
console.log(getArr(myArr)) //this way we can access the array
console.log(getArr([400,3883,383])) //we can also pass owr own custom array directly