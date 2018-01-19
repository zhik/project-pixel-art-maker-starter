// Select color input
const colorEl = document.getElementById('colorPicker');
// Select size input
const sizeFormEl = document.getElementById('sizePicker');
// Select table element
const table = document.getElementById('pixel_canvas');

// When size is submitted by the user, call makeGrid()
sizeFormEl.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height = document.getElementById('input_height').value;
    const width = document.getElementById('input_width').value;
    table.innerHTML = ''; //clear grid
    makeGrid(table, height, width);
})

function colorCell(e){
    //change inline css of targeted cell when clicked

    if(e.target.nodeName !== 'TD') return 0; //check if td

    const cell = e.target;
    cell.style.background = colorEl.value;
}

function makeGrid(table, height, width) {
    //append rows
    for(let row = 1; row <= height; row++){
        table.insertAdjacentHTML('beforeend',`<tr id='row-${row}'></tr>`);
        const rowEl = document.getElementById(`row-${row}`);
        //append cells
        for(let cell = 1; cell <= width; cell++){
            rowEl.insertAdjacentHTML('beforeend', '<td></td>');
        }
    }

    table.addEventListener('click', e => colorCell(e))
}
