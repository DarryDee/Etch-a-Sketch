const container = document.createElement("div");
container.className = "grid-container";
document.body.appendChild(container);


for(let i = 0; i < 16;i++){

    for(let j = 0; j < 16; j++){

       container.appendChild(document.createElement("div")).setAttribute("class","grid")
    }
    
}
