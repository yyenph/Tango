function globalSearch(arr,obj){
    result=[]
    for (let i=0;i <arr.length;i++){
        if(arr[i]===obj){
            result.push(i)
        }
    }

    
    return result
}
console.log(globalSearch(["b", "a", "n", "a", "n", "a", "s"],'a'))

function basicSearch(arr,obj){
    if (arr.indexOf(obj)===-1){
        return undefined
    }
    else return arr.indexOf(obj)
    
}
console.log(basicSearch([1,2,3,1,4,5],6))