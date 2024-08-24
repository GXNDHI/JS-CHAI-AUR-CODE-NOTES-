
//FALSY VALUES
false , 0 , -0 , bigInt 0n , "" , null , undefined , NaN

//TRUTHY VALUES
"0" , 'false' , " " , [] , {} , functiom(){} , 


//ACCESSING ARRAY IN IF
const userEmail=[]
if(userEmail.length===0){
    console.log("Empty")
}

//ACCESSING AN OBJECT
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}


//NULLISH COALESCING OPERATOR (??): NULL UNDEFINED
//it returns the first value it gets
let val;
val = 5 ?? 10 //returns 5
val = null ?? 10 //return 10
val = undefined ?? 15 //returns 15


//TERNIARYY OPERATOR
condition ? true : false




