const container = document.querySelector("#grid");
const slider = document.querySelector("input");
const grid_size_value = document.querySelector("#grid_size_value");

const SQUARES = slider.value;
changeGridSizeDisplay(slider.value);

function changeGridSizeDisplay(value=16){
    grid_size_value.textContent = `Grid size: ${value}`;
}


function createGrid(squares=SQUARES){
    let cell;
    let div_coll;

    while(container.firstChild){
        container.removeChild(container.firstChild);
    } 

    for(row=0; row < squares; row++){
        div_coll = document.createElement("div");
        div_coll.classList.add(`row${row}`, "rows");

        

        for(col=0; col < squares; col++){
            cell = document.createElement("div");
            cell.classList.add(`row${row}col${col}`, "cell");
            cell.addEventListener("mouseover", (e) => {
                e.target.style.background = "black";
            })
            
            div_coll.appendChild(cell);
        }
        container.appendChild(div_coll);
    }
}

createGrid();

slider.oninput = function(e){
    console.log(slider.value);
    changeGridSizeDisplay(slider.value);
    createGrid(slider.value);
}