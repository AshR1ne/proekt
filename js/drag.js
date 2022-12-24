const zone1 = document.querySelector('.zone-1');
const zone2 = document.querySelector('.zone-2');
const img = document.querySelector('#img');


zone1.ondragover = allowDrop;



function allowDrop(event){
    event.preventDefault();
}



img.ondragstart = drag;

function drag(event){
    event.dataTransfer.setData('id', event.target.id);
}

zone1.ondrop = drop;


function drop(event){
    let itemId = event.dataTransfer.getData('id');
    console.log(itemId);
    event.target.append(document.getElementById(itemId));
}

const parent = document.querySelector('.zone-1');
const child = document.querySelector('#img');

function proverka(event){
    let contains = parent.contains(child);
    if(contains == false){
        event.preventDefault();
        alert('Выполни задание, чтобы продолжить');
    }  
}
