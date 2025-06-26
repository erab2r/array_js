const numbers = [1,2,3,44,5,6,7,8,9,10];
console.log(numbers);
// numbers.reverse();
// console.log(numbers);

const rev_numbers = [];
for(const num of numbers){
    rev_numbers.unshift(num);
}
    console.log(rev_numbers);

const numbers1 = [11,22,33,44,55,66,77,88,99];

for(let i=numbers1.length-1;i>=0;i--){
    const num1 = numbers1[i];
    console.log(num1);
}