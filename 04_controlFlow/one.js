//IF ELSE
if(condition){
    //code
}
else{
    //code
}

//SCOPE IN CONTROL FLOW
const score =200
if(score>100){
    const power = "fly"
    console.log(`usercpower : ${power}`) //here power can be accessed
}
console.log(`usercpower : ${power}`) //here power cant be accessed 


//ANOTHER WAY TO DECLARE
1.
const balance =1000
if(balance>500) console.log("TEST"); 

2.
const balance = 1000
if(balance>500) console.log("TEST"),
console.log("TEST2");

3.
const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){
    //code
}
else{
    //code
}

4.
const userLoggedIn = true
const debitCard = true

if(userLoggedIn || debitCard){
    //code
}
else{
    //code
}


//NESTING
if(balance>500){
    console.log("RUN")
}
else if(balance<750){
    console.log("RUN2")
}
else{
    console.log("RUN3")
}

