function createDivs(divNumber) {
    for(let i=0; i<divNumber; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("sketchDiv");
        newDiv.addEventListener("mouseenter", changeDivColor);
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
let divNumber = 256;

    createDivs(divNumber);

const button = document.getElementById("divPerSide");
button.addEventListener("click", function (e) {

    divNumber = prompt("How many squares per side?", "16");
    if(divNumber == null || divNumber == "" || divNumber < 2){
        alert("Invalid square number.")
        divNumber = 16;
    }

    eraseDivs();
    createDivs(divNumber*divNumber);
});