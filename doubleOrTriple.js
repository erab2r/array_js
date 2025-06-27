function doubleOrTriple(number,doDouble){
    if(doDouble===true){
        const num1= number*2;
        console.log(num1);
    }
    else{
        const num2 = number*3;
        console.log(num2);
    }
}
doubleOrTriple(6,true);
doubleOrTriple(6,false);
