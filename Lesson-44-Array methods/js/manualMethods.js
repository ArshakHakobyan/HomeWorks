"use stict";

// Manual forEach

const testArr = [1,2,3,4,5,7]

function costomForEach (arr,func) {
    for(let i = 0; i < arr.length; i++){
       func(arr[i], i, arr)
    }
}

// Manual Map
function costomMap(arr,handler){
    const teckArr = []
    for(let i = 0; i < arr.length; i++){
            teckArr.push(handler(arr[i], i, arr))
     }
     return teckArr
}

// Manual Filter
function costomFilter(arr,handler){
    const teckArr = []
    for(let i = 0; i < arr.length; i++){
        handler(arr[i]) ? teckArr.push(arr[i]): ""    
     }
     return teckArr
}

// Manual Reduce (with Array Prototype)
Array.prototype.costomReduce = function(handler,type){ 
    let result = type 
    if(result === undefined){ 
        result = this[0] 
        for(let i = 1; i < this.length; i++){ 
            result = handler(result,this[i],i,this) 
        } 
    }else{ 
        for(let i = 0; i < this.length; i++){ 
            result = handler(result,this[i],i,this) 
        } 
    } 
    return result 
}

costomForEach(testArr,(item) => console.log(item + 1));
const test = costomMap(testArr,(item) => (item + 1))
const test1 = costomFilter(testArr,(item) => (item > 1))
const test3 = testArr.costomReduce((res,item)=> res * item , 5)
console.log(test3)