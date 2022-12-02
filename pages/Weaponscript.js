import Weapon from "../Weapon.js";

function addingPotionList(item){
    weaponContent += item.Pcontent();
}
function addingPopcontent(item){
    popupContent += item.Ppopup();
}



let currentrows = document.getElementsByClassName("row");
let rowIds = [];
for (let item of currentrows) {
    rowIds.push(item.id);
}


const list = []
let weaponContent = ``
let popupContent=``
const ironSword = new Weapon(
    "Iron Sword",
    "Sword made of Iron",
    10,
    15,
    "../Weapon.png",
    'ironSword'
)
list.push(ironSword)

const ironSword2 = new Weapon(
    "Iron Sword",
    "Sword made of Iron",
    10,
    15,
    "../Weapon.png",
    'ironSword2'
)
list.push(ironSword2)

const ironSword3 = new Weapon(
    "Iron Sword",
    "Sword made of Iron",
    0,
    30,
    "../Weapon.png",
    'ironSword3'
)
list.push(ironSword3)

list.forEach(addingPotionList);
list.forEach(addingPopcontent);
document.querySelector(".row").innerHTML += weaponContent
document.body.innerHTML += popupContent
