const heights = [12,34,56,78,67,98,45,67,45];
function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}
const h = getMax(heights);
console.log(h);