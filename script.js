const container = document.querySelector(".container");
const choosePixel = document.createElement("button");
const gridContainer = document.createElement("div");
const buttonContainer = document.createElement("div");


gridContainer.className = "grid-container";
container.appendChild(gridContainer);


buttonContainer.className = "button-container";
container.appendChild(buttonContainer)

choosePixel.textContent = "Choose Squares per Side";
buttonContainer.appendChild(choosePixel);

let numberOfSquares = 16;
let value = (500 / Number(numberOfSquares)) - 4;

DrawGrid(numberOfSquares,value);

choosePixel.addEventListener("click",NewGrid);

function NewGrid(){
    
    numberOfSquares = prompt("How many Squares do you want per side? Give in a number between 16 and 100");
    if (numberOfSquares < 16 || numberOfSquares > 100) {
        alert("Invalid Input! Number should be bigger than 16 and smaller than 100");
        return;
    }
    value = (500 / Number(numberOfSquares)) - 4;
    clearGrid();
    DrawGrid(numberOfSquares,value);
    
}

function clearGrid(){
    let divs = document.querySelectorAll(".grids");
    divs.forEach(div =>{
        div.remove();
    })
    
}
function DrawGrid(numberOfSquares, value){

    for(let i = 0; i < Number(numberOfSquares);i++){

        for(let j = 0; j < Number(numberOfSquares); j++){
    
            let grid = document.createElement("div");
            grid.setAttribute("id",`Row-${j}Column-${i}`);
            grid.setAttribute("class", "grids")
    
            grid.style.width = value.toString() + "px";
            grid.style.height = value.toString() + "px";
    
            grid.addEventListener("mouseover",()=>{
                grid.style.background = "black";
            })
            gridContainer.appendChild(grid);
        }
    }
}
