import  MagicScroll from "../Magic Scroll.js";

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

const list = []
let potionContent = ``
let popupContent=``

const lightning = new MagicScroll(
    "lightning ",
    "lightning shall be brought down to strike your foes ",
    10,
    15,
    "../sprites/MagicScroll.png",
    'lightning'
)
list.push(lightning)

const fireBall= new MagicScroll(
    "Fire Ball ",
    "lightning shall be brought down to strike your foes ",
    10,
    15,
    "../sprites/MagicScroll.png",
    'fireBall'
)
list.push(fireBall)

const steelSpikes= new MagicScroll(
    "Steel Spikes ",
    "Steel Spikes come to you",
    10,
    15,
    "../sprites/MagicScroll.png",
    'steelSpikes'
)
list.push(steelSpikes)

list.forEach(addingPotionList);
list.forEach(addingPopcontent);
document.querySelector(".row").innerHTML += potionContent
document.body.innerHTML += popupContent