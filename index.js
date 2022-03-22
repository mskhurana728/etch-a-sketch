const container = document.querySelector(".container");
const button = document.querySelector("#btn-1");
const cell = document.createElement("div");
cell.classList.add("cell");

function createGrid(n = 16) {

    for (let i = 0; i < n * n; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.backgroundColor = "white";

        cell.style.gridTemplateColumns = `repeat(${n}, 1fr)`
        cell.style.gridTemplateRows = `repeat(${n}, 1fr)`
        container.appendChild(cell);
    }
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
}

function removeGrid() {
    container.innerHTML = "";
}


function setGridSize() {
    let gridSize;
    while (!gridSize || (gridSize <= 0) || (gridSize > 64)) {
        gridSize = prompt("Enter the number of squares per side for the new grid !! Max 64", 16);
        if (!gridSize) {
            gridSize = 16;
        }
    }


    return gridSize;
}

function mouseoverEffect() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.classList.add("cell");
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black"
        })
    })
}

button.addEventListener("click", () => {
    removeGrid();
    let gridSize = setGridSize();
    console.log("Size " + gridSize);
    createGrid(gridSize);
    mouseoverEffect();
})

createGrid();
mouseoverEffect();

