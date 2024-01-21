const container = document.querySelector(".container");

const gridContainer = document.createElement("div");
gridContainer.className = "grid-container";
container.appendChild(gridContainer);

const buttonContainer = document.createElement("div");
buttonContainer.className = "button-container";
container.appendChild(buttonContainer)

const choosePixel = document.createElement("button");
choosePixel.textContent = "Choose Squares per Side"

container.appendChild(choosePixel);
buttonContainer.appendChild(choosePixel)


choosePixel.addEventListener("click",()=>{
    numberOfSquares = prompt("How many Squares do you want per side ? Give in a number between 16 and 100");

})
let numberOfSquares = 16;
let value = (500 / Number(numberOfSquares)) - 4


for(let i = 0; i < 16;i++){

    for(let j = 0; j < 16; j++){

        let grid = document.createElement("div");
        grid.setAttribute("id",`Row-${j}Column-${i}`);

        grid.addEventListener("mouseover",()=>{
            grid.style.background = "black";
        })
        gridContainer.appendChild(grid);
    }
}