import Armor from "./Armor.js";
import Weapon from "./Weapon.js";
import Potion from "./Potion.js";

const healthPotion = new Potion(
    "Health Potion",
    "A flask of liquid that heals the body from injuries",
    10,
    15

)

const speedPotion = new Potion(
    "Speed Potion",
    "A flask of liquid that gives you SPEEEDDDDD GOTTA GO FAST",
    10,
    20
)

const idkPotion = new Potion(
    "????????",
    "??????????",
    0,
    30
)


const potionContent = healthPotion.Pcontent();
document.body.innerHTML = potionContent


