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
    this.style.backgroundColor = "black";
}

function eraseDivs() {
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}

const container = document.getElementById("container");
let divSide = 16;

createDivs(divSide);

const button = document.getElementById("divPerSide");
button.addEventListener("click", function (e) {

    divSide = prompt("How many squares per side?", "16");
    if(divSide == null || divSide == "" || divSide < 2){
        alert("Invalid square number.")
        divSide = 16;
    }

    eraseDivs();
    createDivs(divSide);
});