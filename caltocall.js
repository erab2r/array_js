function addition(num1,num2){
    return num1 + num2;
}
function subtraction(num1,num2){
    return num1 - num2;
}
function multi(num1,num2){
    return num1 * num2;
}
function division(num1,num2){
    return num1 / num2;
}
function calculator(num1,num2, operation){
    if(operation === 'addition'){
        return addition(num1,num2);
    }
    else if(operation === 'subtraction'){
        return subtraction(num1,num2);
    }
    else if(operation === 'multi'){
        return multi(num1,num2);
    }
    else if(operation === 'division'){
        return division(num1,num2);
    }
    else{
        console.log('No operation');
    }
}
const result = calculator(10,5,'addition');
console.log(result);