function sumOfAllNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
          console.log(number);
          sum +=number;
    }
    return sum;
}
const numbs = sumOfAllNumbers([200,100,200]);
console.log(numbs);