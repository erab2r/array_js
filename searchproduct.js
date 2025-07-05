const products = [
   {id: 1,name: 'xiami phone',price: 19000},
   {id: 2,name: 'iphone',price: 1000000},
   {id: 3,name: 'mac book air',price: 119000},
   {id: 4,name: 'lenavo laptop',price: 79000},
   {id: 5,name: 'Dell inspiron laptop',price: 89000},
   {id: 6,name: 'Samsung phone note 7',price: 19000},
   {id: 7,name: 'Nokia phone',price: 19000},
   {id: 8,name: 'phone one',price: 19000},
]
function matchProducts(products,search){
    const match= [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            match.push(product);
        }
}
return match;
}
const result = matchProducts(products,'laptop');
console.log(result);
