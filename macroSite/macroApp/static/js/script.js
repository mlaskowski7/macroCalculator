const showButtonList = document.getElementById('show-buttonList');
const foodTable = document.getElementById('foodTable');
const carbsCell = document.getElementById('carbs');
const proteinCell = document.getElementById('protein');
const fatsCell = document.getElementById('fats');
const caloriesCell = document.getElementById('calories');
const progressBar = document.getElementById('progress-bar');


let carbs=0,protein=0,fats=0,calories=0;
for(let i = 1;i<foodTable.rows.length-1;i++){
    carbs += parseFloat(foodTable.rows[i].cells[1].innerHTML);
    protein += parseFloat(foodTable.rows[i].cells[2].innerHTML);
    fats += parseFloat(foodTable.rows[i].cells[3].innerHTML);
    calories += parseFloat(foodTable.rows[i].cells[4].innerHTML);
}

const calPer = (calories/2000)*100;
progressBar.setAttribute("style","width:"+calPer+"%");
progressBar.innerHTML = `${calPer}%`;

carbsCell.innerHTML = carbs;
proteinCell.innerHTML = protein;
fatsCell.innerHTML = fats;
caloriesCell.innerHTML = calories;



let tableHidden = true;
function toggleTableView(){
    if(tableHidden){
        foodTable.removeAttribute('hidden');
        showButtonList.textContent = 'Hide Your Consumed Food List';
        tableHidden = false;
    } else{
        foodTable.setAttribute('hidden','');
        showButtonList.textContent = 'Show Your Consumed Food List';
        tableHidden = true;
    }
}

const ctx = document.getElementById('myChart');
      
new Chart(ctx, {
    type: 'doughnut',
    data:{
        labels: [
            'Carbs',
            'Proteins',
            'Fats',
        ],
        datasets: [{
            label: 'Macronutrients breakdown',
            data: [carbs, protein, fats],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
            ],
            hoverOffset: 4,
        }]
    },
});




showButtonList.addEventListener('click',toggleTableView);
