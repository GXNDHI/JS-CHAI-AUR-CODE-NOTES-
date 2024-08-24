const myNum = [1,2,3,4,5]

const newNums=numNum.map((num) => {return num+10})

const newNums = myNum
                .map((num) => num*10)
                .map((num)=>num+1)  //chaining of maps
                .filter((num)=>num>=40)
console.log(newNums)
