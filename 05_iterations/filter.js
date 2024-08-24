const myNum=[1,2,3,4,5,6]

//Syntax of applying filter
1.const newNums= myNum.filter((num)=> num>4)
2.const newNums= myNum.filter((num)=> (num>4))
3.const newNums= myNum.filter((num)=> {  //always use return while using scope
    return num>4;                          <<----| 
})
4.myNum.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})


 