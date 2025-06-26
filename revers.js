const numbers = [1,2,3,44,5,6,7,8,9,10];
console.log(numbers);
// numbers.reverse();
// console.log(numbers);

const rev_numbers = [];
for(const num of numbers){
    rev_numbers.unshift(num);
}
    console.log(rev_numbers);