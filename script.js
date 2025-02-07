function createDivs() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("sketchDiv");
    // newDiv.style.border = "1px solid black";
    // newDiv.style.width = "40px";
    // newDiv.style.height = "40px";

    div.appendChild(newDiv);
}

const div = document.getElementById("container");
let divNumber = 256;

for(let i=0; i<divNumber; i++){
    createDivs();
}
