function evenSizeString(str){
    const size = str.length;
    console.log(str,size);
    if(size%2===0){
        console.log('Even size');
    }
    else{
        console.log('Odd size');
    }
}
evenSizeString('Israt');
evenSizeString('habibullah');
