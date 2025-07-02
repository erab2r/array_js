const today = new Date();
console.log(today);
const date = new Date('2026-10-2');
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(2026, 0, 2);
console.log(specificDate);
specificDate.setMonth(9);
console.log(specificDate.toLocaleDateString('en-GB'));
