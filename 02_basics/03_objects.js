const symb = Symbol("key1")
//OBJECT CREATION
const User = { 
    name : "Animesh", //these type of key value can be accessed using dot(.) --> 1st way
    "name" : "Gandhi", //these type of key value cant be accessed using dot because the key is a string format key ,rather it can be accessed using [""]
    [symb] : "Symbol syntax", //syntax of how a symbol key datatype is declared in object
    age : 18,
    emil : "gandhi@google.com",
    valid : true
}

//OBJECT ACCESS  OF NORMAL KEY(1st way)
console.log(User.age)

// OBJECT ACCESS OF NORMAL KEY (2nd way)
console.log(User["age"])

// OBJECT ACCESS OF STRING KEY
console.log(User["name"])

//OBJECT ACCESS OF SYMBOL
 console.log(User[symb])


 //CHANGE THE VALUE OF THE KEY
 User.age = 22

 //FREEZE AN OBJECT (this freezes the object and its values cant be changed)
 Object.freeze(User)


 User.greeting=function(){ //Creating a function
    console.log("Hello Javascript User")
 }

 User.greetingTwo=function(){
    console.log(`Hello Js user ${this.name}`) //"This" is used to refer to the same object . Here User is the object .Because there ca be more an 1 object in a program.Therefore this id used to refer to the current object.
 }