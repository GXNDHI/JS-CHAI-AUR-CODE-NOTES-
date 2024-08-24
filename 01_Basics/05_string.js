const name="Animesh"
const repocnt=20

//we can concat two variables in this format
console.log(name+repocnt+"value");

//we can access the values of the variables using ${} sign under backticks(``)
console.log(`My name is ${name}`) //highly recommended methd to use during coding


//we initialize a string with new keyword so tha we can access the string later
const gameName=new String('Animesh')
//accessing the string
console.log(gameName.length) //length of the string
console.log(gameName.toUpperCase()) //to uppercase
console.log(gameName.charAt(2)) //check the character at certain position
console.log(gameName.indexOf('a')) //index of certain character in the string
//refer to mdn for more such string mehtods