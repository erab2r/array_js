const phones =[
    {name : 'Samsung',price : 20000,camera :'14mp',color : 'Black' },
    {name : 'xaomi',price : 30000,camera :'12mp',color : 'Black' },
    {name : 'Iphone',price : 100000,camera :'16mp',color : 'Black' },
    {name : 'Walton',price : 40000,camera :'15mp',color : 'Black' },
    {name : 'Infix',price : 50000,camera :'14mp',color : 'Black' },
    {name : 'oppo',price : 60000,camera :'13mp',color : 'Black' },
    {name : 'HTC',price : 70000,camera :'12mp',color : 'Black' },
]
function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone
        }

    }
    return min;

}
const TotalPrice =getCheapestPhone(phones);
console.log(TotalPrice);