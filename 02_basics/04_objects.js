//Singleton
const obj=new Object()
obj.id="123"
obj.name="Animesh"

//Non Singleton
const User ={
    id:"123",
    name:"Animesh"
}



// MERGING OF OBJECTS
 const obj1={
    1:"a",
    2:"b"
 }
 const obj2={
    3:"c",
    4:"d"
 }

 const obj3=Object.assign({},obj1,obj2) //1st way to join
 console.log(obj3)


 const obj4={...obj1,...obj2}
 console.log(obj4)


 //ARRAY OF OBJECTS
 const obj=[
    {
        id1:"1",
        name:"abs"
     },
     {
        id2:"2",
        name2:"jwn"
     }
 ]
//ACCESING THE OBJECT
obj[1].name


console.log(Object.keys(obj_name)) //printing the keys in an object
console.log(Object.values(obj_name)) //printing the values of the object
console.log(Object.entries(obj_name)) //printing the entries of the ovejct
console.log(obj_name.hasOwnProperty('name')) //check either the key is present in the object or not


//ANOTHER WAY OF ACCESING VALUES
const{key_name}=object_name
console.log(key_name)


//CHANGING THE NAME OF KEY
const(old_key_name : new_key_name) = object_name
console.log(new_key_name)


//JSON FORMAT
{
    name:"ANIMESH",
    age:12,
    height:5
}
//this can be converted in the form of object . During API call json format is used which can be further converted to object