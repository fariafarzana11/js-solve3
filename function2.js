// 2. Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function num(number){
    if(number % 2 !== 0){
        const odd = number * 2;
        return odd;
    }
    else{
        const even = number / 2;
        return even;
    }
}
const result = num(20);
console.log(result);



