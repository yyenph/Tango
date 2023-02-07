function toRoman(num){
    result=''
    let keys = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (let i =0;i<values.length;i++){
        while (num>=values[i]){
            result+=keys[i]
            num-=values[i]

        }
    }
    return result
}
console.log(toRoman(9))
console.log(toRoman(944))
console.log(toRoman(150))