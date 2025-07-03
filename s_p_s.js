function productQuantity(shirtQuantity,pantQuantity,shoeQuantity){
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;
    const Pershirt  = shirtPrice * shirtQuantity;
    const Perpant = pantPrice * pantQuantity;
    const Pershoe = shoePrice * shoeQuantity;

    const TotalPrice = Pershirt + Perpant + Pershoe;
    return TotalPrice;
}
 const total = productQuantity(2,2,1);
 console.log(total);