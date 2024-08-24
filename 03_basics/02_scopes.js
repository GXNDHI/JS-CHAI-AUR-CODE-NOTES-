//GLOBAL SCOPE
let a=10
const b=20
var c = 18
//here it can be printed a b and c 
console.log(a)
console.log(b)
console.log(c)

//BLOCK SCOPE
....{
    let a=10 //let cannot be accessed outside scope
    const b=20 //const cannot be accessed outside scope
    var c = 18  //var can be accessed outside scope
}
console.log(a) 
console.log(b)
console.log(c)
