import Armor from "../Armor.js";
import Weapon from "../Weapon.js";
import Potion from "../Potion.js";

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
rowIds.forEach(testing)
function testing(id){
    let row= document.getElementById(id);
    for (let objs of Potionlist){
    if (row.childElementCount < 3){
        potionContent =  objs.Pcontent();
        document.getElementById(id).innerHTML += potionContent
    }
    else{
        var newrow = document.createElement('div')
        newrow.className="row"
        newrow.id="blur"+(rowIds.length + 1)
        
    }
    }   
}
//Potionlist.forEach(addingPotionList);
Potionlist.forEach(addingPopcontent);
document.body.innerHTML += popupContent
