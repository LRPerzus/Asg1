import Armor from "../Armor.js";
import Weapon from "../Weapon.js";
import Potion from "../Potion.js";

function addingPotionList(item){
    potionContent += item.Pcontent();
}
function addingPopcontent(item){
    popupContent += item.Ppopup();
}

const Potionlist = []
let potionContent = ``
let popupContent=``
const healthPotion = new Potion(
    "Health Potion",
    "A flask of liquid that heals the body from injuries",
    10,
    15,
    "../Potion.png",
    'healthPotion'
)
Potionlist.push(healthPotion)

const speedPotion = new Potion(
    "Speed Potion",
    "A flask of liquid that gives you SPEEEDDDDD GOTTA GO FAST",
    10,
    20,
    "../Potion.png",
    'speedPotion'

)
Potionlist.push(speedPotion)

const idkPotion = new Potion(
    "????????",
    "??????????",
    0,
    30,
    "../Potion.png",
    'idkPotion'
)
Potionlist.push(idkPotion)

Potionlist.forEach(addingPotionList);
Potionlist.forEach(addingPopcontent);

document.querySelector(".row").innerHTML += potionContent
document.body.innerHTML += popupContent
console.log(document.querySelector(".name"))
