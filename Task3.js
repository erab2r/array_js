//Use a for...of loop to concatenate all the elements of an array into a single string.
var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let add = '';

for (const name of numbers) {
    add += name;
}

console.log(add);