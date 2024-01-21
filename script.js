const container = document.createElement("div");
container.className = "grid-container";
document.body.appendChild(container);


for(let i = 0; i < 16;i++){

    for(let j = 0; j < 16; j++){

        let grid = document.createElement("div");
        grid.setAttribute("id",`Row-${j}Column-${i}`);

        grid.addEventListener("mouseover",()=>{
            grid.style.background = "black";
        })
        container.appendChild(grid);
    }
    
}
