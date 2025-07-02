const numbers = [1,33,44,55,44,2,1,3,3,44,44,55,89];
function duplicate_array(array){
    const unique = [];
    for(const num of array){
        if(unique.includes(num)===false){
            unique.push(num);
        }
    }
    return unique;

}
const nums = duplicate_array(numbers);
console.log(nums);