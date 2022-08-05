const d = document;
let b = document.body;

const recipeInfo = {
    'Prep Time': '10 min',
    'Cook Time': '20 min',
    'Total Time': '30-45 min',
    'Servings': 4,
}

let prepSection = d.getElementById('prepInfo');
for (let i in recipeInfo) {
    console.log(`${i}: ${recipeInfo[i]}`)
}

console.log(prepSection);

// let prepList = d.createElement('ul');
// prepList.setAttribute('id', 'prepList');
// console.log(prepList);
// prepSection.appendChild('prepList');

const prepList = d.getElementById('prepList');

for (let i in recipeInfo) {
    let li = d.createElement('li');
    li.setAttribute('class', 'prepItem');
    li.setAttribute('id', i);
    li.innerHTML = `
    <strong>${i}:</strong>
    <br>${recipeInfo[i]}
    `;
    prepList.appendChild(li);

}

let hamburgerNav = d.getElementById('hamburgerInput');
if (hamburgerNav.checked) {
    console.log('checked!');
}