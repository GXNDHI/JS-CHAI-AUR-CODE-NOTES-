//FOR
for(let index =0 ; index <= Array.length ; index++){
    const element = array[index]
}

//NESTED FOR LOOP
for(let index =0 ; index <= Array.length ; index++){
    const element = array[index]
    for(let index2 =0 ; index2 <= Array.length ; index2++){
        const element = array[index2]
        console.log(`${index} ${index2}`) //Inner loop will have access to both index and index2
    }
}

console.log(index); //Index cant be accessed outside the scope

