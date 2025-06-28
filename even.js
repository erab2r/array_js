function evenNumbersOnly(numbers){
    const even = [];
    for(const number of numbers){
        if(number%2===0){
            console.log(number);
            even.push(number);
        }
    }
    return even;

}
const num = evenNumbersOnly([5,7,8,9,34,24,28]);
console.log(num);