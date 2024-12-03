// General examples of the use of arrays:

// Flat Array:
const fruitBowl = ["Apple", "Pear", "Grapes"];

// Object with Arrays:
const biggerFruitBowl = {
  fruit: ["Apple", "Pear", "Grapes"],
  berries: ["Banana", "Strawberry"],
};

// Nested Arrays in Objects
const evenBiggerFruitBowl = {
  fruit: [
    { apple: ["Red apple", "Green Apple", "Yellow Apples"] },
    "Pear",
    "Grapes",
  ],
  berries: ["Banana", "Strawberry"],
};
/*
const matrix = [
  {idk: [1, 2, 3]},
  [4, 5, 6],
  {qwerty: [7, 8, 9]},
];

console.log(matrix.join()); // 1,2,3,4,5,6,7,8,9
console.log(matrix.join(";")); // 1,2,3;4,5,6;7,8,9
*/

/*
const pocket = [];
pocket.push('potet');
pocket.push('tlf');
pocket.push('vann');
pocket.push('stein');
pocket.push('pent brukt papir');
pocket.push('the void');
pocket.push('plastfolie');
pocket.unshift('smeltet sjokolade');
*/

//_____________________________________________________________________________________________

const addFront = document.querySelector('#addFront');
const removeFront = document.querySelector('#removeFront');
const addBack = document.querySelector('#addBack');
const removeBack = document.querySelector('#removeBack');
const removeNr = document.querySelector('#removeNr');
const outP = document.querySelector('#outP');
const addNr = document.querySelector('#addNr');
const inputField = document.querySelector('#inputField');
const selectNum = document.querySelector('#selectNum');
const sortAll = document.querySelector('#sortAll');
console.log(addFront, removeFront, addBack, removeBack, removeNr, outP, inputField);
/*const selectNum = document.querySelector('#selectNum')
console.log(selectNum)*/

const THEarray = [];

inputField.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    console.log('insert funny here0');
    THEarray.unshift(inputField.value);
    outP.textContent = THEarray;
  };
});
addFront.addEventListener('click', ()=> {
  console.log('insert funny here1');
  THEarray.unshift(inputField.value);
  outP.textContent = THEarray;
});
removeFront.addEventListener('click', ()=> {
  console.log('insert funny here2');
  THEarray.shift();
  outP.textContent = THEarray;
});
addBack.addEventListener('click', ()=> {
  console.log('insert funny here3');
  THEarray.push(inputField.value);
  outP.textContent = THEarray;
});
removeBack.addEventListener('click', ()=> {
  console.log('insert funny here4');
  THEarray.pop();
  outP.textContent = THEarray;
});
removeNr.addEventListener('click', ()=> {
  console.log('insert funny here5');
  THEarray.splice(selectNum.value-1, 1);
  outP.textContent = THEarray;
});
addNr.addEventListener('click', ()=> {
  console.log('insert funny here6');
  THEarray.splice(selectNum.value-1, 0, inputField.value);
  outP.textContent = THEarray;
});
sortAll.addEventListener('click', ()=> {
  console.log('insert funny here7');
  THEarray.sort();
  outP.textContent = THEarray;
});

/*
for (let i=0; 1<THEarray.length;i++){
  let numberL = document.createElement('OPTION');
  console.log(numberL);
  numberL.textContent = i;
  console.log(numberL);
  numberL.value = i;
  console.log(numberL.value);
  selectNum.appendChild(numberL);
}*/