//FOR OF
const arr =[1,2,3,4,5]

for (const num of arr) {
    console.log(arr)
}

//MAPS 
//only unique values are printed in maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"America")

//ACCESSING MAPS USING FOR OF LOOP
for (const [key,values] of map) {
    console.log(key,':-',value)
}

//ACCESSING OBJECT USING FOR OF LOOP [NOT ACCESSIBLE USING FOR OF] [USE FOR IN]
for (const [key,values] of myObj) {
    console.log(key,':-',value)
}

//MODIFYING AN ARRAY USING MAPS
const myNum=[1,2,3,4,5,6,7,8,9]
1.const newNum=myNum.map((num)=>{return num+10})
2.const newNum=myNum
                .map((num)=>num*10)
                .map((num)=>num+1)
