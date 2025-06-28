// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function evenOddNumber(number){
    if(number%2===1){
        let result = number*2;
        return result;
    }
    else{
        let result = number/2;
        return result;
    }

}

console.log(evenOddNumber(5));
console.log(evenOddNumber(6));
console.log(evenOddNumber(7));
