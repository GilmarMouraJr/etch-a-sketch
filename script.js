function createDivs(divSide) {
    let divNumber = divSide * divSide;
    let size = 800/divSide;
    for(let i=0; i<divNumber; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("sketchDiv");
        newDiv.addEventListener("mouseenter", changeDivColor);
        newDiv.style.height = size+"px";
        newDiv.style.width = size+"px";
        container.appendChild(newDiv);
    }
}

function changeDivColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    let value = window.getComputedStyle(this).getPropertyValue('background-color').split(', ');
    // let opacity = value[3] ? Number(value[3].replace(")", "")) + 0.1 : 1;
    if(value[3]){
        opacity = Number(value[3].replace(")", "")) + 0.1
        this.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
}

function eraseDivs() {
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}

function refreshDivs() {
    divSide = prompt("How many squares per side?", "16");

    if(divSide == null || divSide == "" || divSide < 2){
        alert("Invalid square number.")
        divSide = 16;
    }

    if(divSide > 100){
        alert("Square number too high. Defaulting to maximum of 100.")
        divSide = 100;
    }

    eraseDivs();
    createDivs(divSide);
}

const container = document.getElementById("container");
let divSide = 16;

createDivs(divSide);

const button = document.getElementById("divPerSide");
button.addEventListener("click", refreshDivs);