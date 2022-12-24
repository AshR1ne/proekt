const zone1 = document.querySelector('.zone-1');
const zone2 = document.querySelector('.zone-2');
const zone3 = document.querySelector('.zone-3');
const zone4 = document.querySelector('.zone-4');
const zone5 = document.querySelector('.zone-5');
const img = document.querySelector('.img');


zone1.ondragover = allowDrop;
zone2.ondragover = allowDrop;
zone3.ondragover = allowDrop;
zone4.ondragover = allowDrop;


function allowDrop(event){
    event.preventDefault();
}



img1.ondragstart = drag;
img2.ondragstart = drag;
img3.ondragstart = drag;
img4.ondragstart = drag;

function drag(event){
    event.dataTransfer.setData('id', event.target.id);
}

zone1.ondrop = drop;
zone2.ondrop = drop;
zone3.ondrop = drop;
zone4.ondrop = drop;


function drop(event){
    let itemId = event.dataTransfer.getData('id');
    console.log(itemId);
    event.target.append(document.getElementById(itemId));
}

const parent1 = document.querySelector('.zone-1');
const child1 = document.querySelector('#img3');
const parent2 = document.querySelector('.zone-2');
const child2 = document.querySelector('#img4');
const parent3 = document.querySelector('.zone-3');
const child3 = document.querySelector('#img2');
const parent4 = document.querySelector('.zone-4');
const child4 = document.querySelector('#img1');

function proverka(event){
    let contains1 = parent1.contains(child1);
    let contains2 = parent2.contains(child2);
    let contains3 = parent3.contains(child3);
    let contains4 = parent4.contains(child4);
    if(contains1 == false ||contains2 == false ||contains3 == false ||contains4 == false){
        event.preventDefault();
        alert('Неправильно, попробуй еще раз');
        location.reload();
    }  
    else {
        event.preventDefault();
        let div = document.createElement('div');
        div.className = "alert";
        div.innerHTML = "<strong>Молодец!</strong>  Все правильно.  <br>выполняется переход к следующему вопросу...</br>" ;
        document.body.append(div);  
        setTimeout(() => window.location.replace(event.target.href), 3000)

    }
    

}
