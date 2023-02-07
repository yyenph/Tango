function fibonacci(num){
    count =1
    first =0
    second=1
    while (count <num){
        count++
        sum=first+second
        first = second
        second=sum
    }
    return sum
}
console.log(fibonacci(7))