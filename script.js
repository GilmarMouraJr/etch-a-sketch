function createDivs() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("sketchDiv");
    newDiv.addEventListener("mouseenter", changeDivColor);
    container.appendChild(newDiv);
}

function changeDivColor() {
    this.style.backgroundColor = "black";
}

const container = document.getElementById("container");
let divNumber = 256;

for(let i=0; i<divNumber; i++){
    createDivs();
}

