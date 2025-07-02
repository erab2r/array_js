function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number%2===1){
            odds.push(number);
        }
    }
    let  sum = 0;
    for(const num of odds){
        sum = sum + num;
    }
    const count = odds.length;
    console.log(sum);
    avg = sum/count;
    return avg;
}
const numbers = oddAverage([12,42,13,58,65,88,87,98,99]);
console.log(numbers);