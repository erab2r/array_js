const friends = ['sakib','salo','calo','malo','sakib','calo','palo'];
function duplicate_array(array){
    const unique = [];
    for(const friend of array){
         if(unique.includes(friend)===false)
            unique.push(friend);
    }
    return unique;

}
const frnd = duplicate_array(friends);
console.log(frnd);