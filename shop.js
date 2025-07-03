const products = [
    {name: 'Shampoo',price: 300,quantity: 2},
    {name: 'Hair oil',price: 700,quantity: 3},
    {name: 'LAFZ',price: 400,quantity: 6},
    {name: 'REVIVE',price: 400,quantity: 1},
]
function cartTotal(products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}
const shoppingCost = cartTotal(products);
console.log(shoppingCost);