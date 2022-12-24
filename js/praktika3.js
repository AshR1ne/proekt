const zone1 = document.querySelector('.zone-1');
const zone4 = document.querySelector('.zone-4');
const zone3 = document.querySelector('.zone-3');
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');

zone1.ondragover = allowDrop;
zone3.ondragover = allowDrop;
zone4.ondragover = allowDrop;


function allowDrop(event){
    event.preventDefault();
}



img1.ondragstart = drag;
img2.ondragstart = drag;

function drag(event){
    event.dataTransfer.setData('id', event.target.id);
}


zone4.ondrop = drop;



function drop(event){
    let itemId = event.dataTransfer.getData('id');
    console.log(itemId);
    event.target.append(document.getElementById(itemId));
}

const parent = document.querySelector('.zone-4');
const child = document.querySelector('#img1');

function proverka(event){
    let contains = parent.contains(child);
    if(contains == false){
        event.preventDefault();
        alert('Неправильно, попробуй еще раз');
        location.reload();
    }  else{
        event.preventDefault();
        let div = document.createElement('div');
        div.className = "alert";
        div.innerHTML = "<strong>Молодец!</strong>  Все правильно.  <br>выполняется переход к следующему вопросу...</br>" ;
        document.body.append(div);  
        setTimeout(() => window.location.replace(event.target.href), 3000)
}
}


function vvodA(event){
    let pole = document.getElementsByTagName("input")[0].value;
    if(!(pole.includes('a') || pole.includes('A')|| pole.includes('ф') || pole.includes('Ф'))) {
        console.log(pole);
        event.preventDefault();
        alert('Неправильно, попробуй еще раз');
        location.reload();
    }   else{
            event.preventDefault();
            let div = document.createElement('div');
            div.className = "alert";
            div.innerHTML = "<strong>Молодец!</strong>  Все правильно.  <br>выполняется переход к следующему вопросу...</br>" ;
            document.body.append(div);  
            setTimeout(() => window.location.replace(event.target.href), 3000)
    }
}

function vvodS(event){
    let pole = document.getElementsByTagName("input")[0].value;
    if(!(pole.includes('s') || pole.includes('S')|| pole.includes('ы') || pole.includes('Ы'))) {
        console.log(pole);
        event.preventDefault();
        alert('Неправильно, попробуй еще раз');
        location.reload();
    }   else{
        event.preventDefault();
        let div = document.createElement('div');
        div.className = "alert";
        div.innerHTML = "<strong>Молодец!</strong>  Все правильно.  <br>выполняется переход к следующему вопросу...</br>" ;
        document.body.append(div);  
        setTimeout(() => window.location.replace(event.target.href), 3000)
}
}

function vvodC(event){
    let pole = document.getElementsByTagName("input")[0].value;
    if(!(pole.includes('с') || pole.includes('С')|| pole.includes('c') || pole.includes('C'))) {
        console.log(pole);
        event.preventDefault();
        alert('Неправильно, попробуй еще раз');
        location.reload();
    }   else{
        event.preventDefault();
        let div = document.createElement('div');
        div.className = "alert";
        div.innerHTML = "<strong>Молодец!</strong>  Все правильно.  <br>выполняется переход к следующему вопросу...</br>" ;
        document.body.append(div);  
        setTimeout(() => window.location.replace(event.target.href), 3000)
}
}

function vvodV(event){
    let pole = document.getElementsByTagName("input")[0].value;
    if(!(pole.includes('М') || pole.includes('м')|| pole.includes('V') || pole.includes('v'))) {
        console.log(pole);
        event.preventDefault();
        alert('Неправильно, попробуй еще раз');
        location.reload();
    }   else{
        event.preventDefault();
        let div = document.createElement('div');
        div.className = "alert";
        div.innerHTML = "<strong>Молодец!</strong>  Все правильно.  <br>выполняется переход к следующему вопросу...</br>" ;
        document.body.append(div);  
        setTimeout(() => window.location.replace(event.target.href), 3000)
}
}

function vvodX(event){
    let pole = document.getElementsByTagName("input")[0].value;
    if(!(pole.includes('x') || pole.includes('X')|| pole.includes('ч') || pole.includes('ч'))) {
        console.log(pole);
        event.preventDefault();
        alert('Неправильно, попробуй еще раз');
        location.reload();
    }   else{
        event.preventDefault();
        let div = document.createElement('div');
        div.className = "alert";
        div.innerHTML = "<strong>Молодец!</strong>  Все правильно.  <br>выполняется переход к следующему вопросу...</br>" ;
        document.body.append(div);  
        setTimeout(() => window.location.replace(event.target.href), 3000)
}
}

function vvodP(event){
    let pole = document.getElementsByTagName("input")[0].value;
    if(!(pole.includes('p') || pole.includes('P')|| pole.includes('З') || pole.includes('з'))) {
        console.log(pole);
        event.preventDefault();
        alert('Неправильно, попробуй еще раз');
        location.reload();
    }   else{
        event.preventDefault();
        let div = document.createElement('div');
        div.className = "alert";
        div.innerHTML = "<strong>Молодец!</strong>  Все правильно.  <br>выполняется переход к следующему вопросу...</br>" ;
        document.body.append(div);  
        setTimeout(() => window.location.replace(event.target.href), 3000)
}
}

function vvodY(event){
    let pole = document.getElementsByTagName("input")[0].value;
    if(!(pole.includes('y') || pole.includes('Y')|| pole.includes('Н') || pole.includes('н'))) {
        console.log(pole);
        event.preventDefault();
        alert('Неправильно, попробуй еще раз');
        location.reload();
    }   else{
        event.preventDefault();
        let div = document.createElement('div');
        div.className = "alert";
        div.innerHTML = "<strong>Молодец!</strong>  Все правильно.  <br>выполняется переход к следующему вопросу...</br>" ;
        document.body.append(div);  
        setTimeout(() => window.location.replace(event.target.href), 3000)
}
}

function vvodZ(event){
    let pole = document.getElementsByTagName("input")[0].value;
    if(!(pole.includes('я') || pole.includes('Я')|| pole.includes('Z') || pole.includes('z'))) {
        console.log(pole);
        event.preventDefault();
        alert('Неправильно, попробуй еще раз');
        location.reload();
    }   else{
        event.preventDefault();
        let div = document.createElement('div');
        div.className = "alert";
        div.innerHTML = "<strong>Молодец!</strong>  Все правильно.  <br>выполняется переход к следующему вопросу...</br>" ;
        document.body.append(div);  
        setTimeout(() => window.location.replace(event.target.href), 3000)
}
}