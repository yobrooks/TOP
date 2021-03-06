const containDiv = document.querySelector(".container");

//creates grid then attaches everything
function createGrid(x){
    containDiv.style.gridTemplateColumns = `repeat(${x}, 50px`;
    containDiv.style.gridTemplateRows = `repeat(${x-1}, 50px`;

    for(let i = 0; i < x; i++){
        for(let j = 0; j < x; j++){
            let square = document.createElement("div");
            square.classList.add("cell");
            containDiv.appendChild(square);
        }
    }

    //get all the cells and add event listener for being hovered over by mouse
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("mouseover", cellHovered));

    //get the button and add a onclick function
    let button = document.getElementById("remove");
    button.onclick = function(){clearGrid()};
}

// changes background of cell that was hovered over to yellow
function cellHovered(e){
    this.style.backgroundColor = "yellow";
}

//removes the grid and creates a new sketch area grid
function clearGrid(){
    containDiv.innerHTML = "";
    let gridNum = prompt("What dimension would you like your grid to be?");
    createGrid(gridNum);
}

createGrid(16);

/*let years = [2000, 1900, 1940, 2020];
let yearsSorted = years.sort(function(a, b){
    if(a < b){
        return 1;
    }
    else{
        return -1;
    }
});

console.table(yearsSorted);*/
