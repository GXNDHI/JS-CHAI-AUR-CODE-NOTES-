//syntax of reduce
1.
const myNums=[1,2,3]
const myTotal = myNums.reduce(function(acc,currval){
    return acc + currval
},0)
console.log(myTotal)

                            //working of accumulator and curent value
                            A.val of acc = 0 and current val  = 1;  return 0+1 =1
                            B.val of acc = 1 and current val = 2 ; return 1+2=3
                            C.val of acc = 3 and current val = 3 ; return 3+3=6


2.syntax using arrow function
const myTotal = myNums.reduce ((acc,curr)=>(acc+curr),0)
console.log(myTotal)


3.syntax using Object
const shopCart = [
    {
        itemName : "data science",
        price : 12000
    },
    {
        itemName : "Mobile",
        price : 123
    }
]

const priceToPay = shopCart.reduce((acc,item)=>acc+item.price,0)


