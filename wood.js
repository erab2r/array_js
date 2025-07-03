function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
    const PerchairWood = 3;
    const PertableWood = 10;
    const PerbedWood = 3;

    const chairTotalWood = chairQuantity * PerchairWood;
    const tableTotalWood = tableQuantity * PertableWood;
    const bedTotalWood = bedQuantity * PerbedWood;

    const TotalWood = chairTotalWood + tableTotalWood + bedTotalWood;
     return TotalWood;
}
const TotalWoodNeed = woodQuantity(0,0,2);
console.log(TotalWoodNeed);
 