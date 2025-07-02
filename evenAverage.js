function evenAverage(numbers){
    const evens = [];
    for(const number of numbers){
        if(number%2===0){
            evens.push(number);
        }
    }
    let sum = 0;
    for(const num of evens){
        sum = sum + num;
    }
    avg = sum/evens.length;
    return avg;

}
const numbers = evenAverage([52,51,42,41,32,31,69,70,71,81,82]);
console.log(numbers);