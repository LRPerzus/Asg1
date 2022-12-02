import Armor from "../Armor.js";

function addingPotionList(item){
    potionContent += item.Pcontent();
}
function addingPopcontent(item){
    popupContent += item.Ppopup();
}



let currentrows = document.getElementsByClassName("row");
let rowIds = [];
for (let item of currentrows) {
    rowIds.push(item.id);
}

const Potionlist = []
let potionContent = ``
let popupContent=``

const leatherArmor = new Armor(
    "Leather Armor",
    "A Simple Leather Armor for simple protection ",
    10,
    15,
    "../Armor.png",
    'leatherArmor'
)
Potionlist.push(leatherArmor)

const IronArmor = new Armor(
    "Iron Armor",
    "A Simple Iron Armor for simple protection ",
    10,
    15,
    "../Armor.png",
    'IronArmor'
)
Potionlist.push(IronArmor)

const SteelArmor = new Armor(
    "Steel Armor",
    "A Simple Steel Armor for simple protection ",
    10,
    15,
    "../Armor.png",
    'SteelArmor'
)
Potionlist.push(SteelArmor)

Potionlist.forEach(addingPotionList);
Potionlist.forEach(addingPopcontent);
document.querySelector(".row").innerHTML += potionContent
document.body.innerHTML += popupContent