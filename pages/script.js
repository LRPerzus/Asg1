import Armor from "../Armor.js";
import Weapon from "../Weapon.js";
import Potion from "../Potion.js";

const Potionlist = []
let potionContent = ``
const healthPotion = new Potion(
    "Health Potion",
    "A flask of liquid that heals the body from injuries",
    10,
    15
)
Potionlist.push(healthPotion)

const speedPotion = new Potion(
    "Speed Potion",
    "A flask of liquid that gives you SPEEEDDDDD GOTTA GO FAST",
    10,
    20
)
Potionlist.push(speedPotion)

const idkPotion = new Potion(
    "????????",
    "??????????",
    0,
    30
)
Potionlist.push(idkPotion)

Potionlist.forEach(addingPotionList);

function addingPotionList(item){
    potionContent += item.Pcontent();
}

document.body.innerHTML += potionContent
