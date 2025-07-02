const heights = [12,34,56,78,67,98,45,67,45];
function getMax(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const h = getMax(heights);
console.log(h);