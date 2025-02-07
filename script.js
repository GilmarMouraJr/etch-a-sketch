function createDivs() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("sketchDiv");
    div.appendChild(newDiv);
}

const div = document.getElementById("container");
let divNumber = 256;

for(let i=0; i<divNumber; i++){
    createDivs();
}
