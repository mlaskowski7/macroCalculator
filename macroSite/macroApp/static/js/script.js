const showButton = document.getElementById('show-button');
const foodTable = document.getElementById('foodTable');
const carbsCell = document.getElementById('carbs');
const proteinCell = document.getElementById('protein');
const fatsCell = document.getElementById('fats');
const caloriesCell = document.getElementById('calories');

let carbs=0,protein=0,fats=0,calories=0;
for(let i = 1;i<foodTable.rows.length-1;i++){
    carbs += parseFloat(foodTable.rows[i].cells[1].innerHTML);
    protein += parseFloat(foodTable.rows[i].cells[2].innerHTML);
    fats += parseFloat(foodTable.rows[i].cells[3].innerHTML);
    calories += parseFloat(foodTable.rows[i].cells[4].innerHTML);
}
carbsCell.innerHTML = carbs;
proteinCell.innerHTML = protein;
fatsCell.innerHTML = fats;
caloriesCell.innerHTML = calories;


let tableHidden = true;
function toggleTableView(){
    if(tableHidden){
        foodTable.removeAttribute('hidden');
        showButton.textContent = 'Hide Your Consumed Food List';
        tableHidden = false;
    } else{
        foodTable.setAttribute('hidden','');
        showButton.textContent = 'Show Your Consumed Food List';
        tableHidden = true;
    }
}


showButton.addEventListener('click',toggleTableView);