import {errorMessage, showResult} from './general.js';

document.addEventListener('DOMContentLoaded', ()=>{
  initApp();
})
const valuesList = [];

function initApp(){
  /**Events to add, delete elements in the list */
  const buttonAddValue = document.querySelector('.button-add-list');
  buttonAddValue.addEventListener('click',()=>{
    addValue();
  });

  const buttonDeleteValue = document.querySelector('.input-button--eliminate');
  buttonDeleteValue.addEventListener('click', ()=>{
    deleteValue();
  });

  /**Event to calculate */
  const buttonCalculate = document.querySelector('.button-calculate');
  buttonCalculate.addEventListener('click', ()=>{
    calculate();
  });
}

/**Functions */
function addValue(){
  const errorContainer = document.querySelector('.error-add-list');

  const inputValue = document.querySelector('#input-add-values');
  let newValue = inputValue.value;

  if(!newValue){
    /**If there is not a value */
    errorMessage('Ingrese un valor válido', errorContainer);
    return;
  }
  newValue = Number(newValue);
  if(isNaN(newValue)){
    /**If is not a number */
    errorMessage('Ingrese un valor válido', errorContainer);
    return;
  }
  /**Add value to the list */
  valuesList.push(newValue);

  /**Add and show the list in the DOM */
  const listContainer = document.querySelector('.list-values ol');
  const listItem = document.createElement('LI');
  listItem.innerHTML = `<span class="bold">${newValue}<span>`
  listContainer.appendChild(listItem);
  inputValue.value = '';

}

function deleteValue(){
  const errorContainer = document.querySelector('.error-eliminate-list');

  const inputPosition = document.querySelector('#input-eliminate');
  let positionToEliminate = inputPosition.value;

  if(!positionToEliminate){
    /**If there is not a value */
    errorMessage('Ingrese una posición válida', errorContainer);
    return;
  }
  positionToEliminate = Number(positionToEliminate) - 1;

  if(isNaN(positionToEliminate)){
    /**If the position is not a number */
    errorMessage('Ingrese una posición válida', errorContainer);
    return;
  }
  
  if(positionToEliminate < 0 || positionToEliminate >= valuesList.length){
    /**If the position is out of bounds */
    errorMessage('La posición ingresada no existe',errorContainer);
    return;
  }

  /**delete value */
  valuesList.splice(positionToEliminate,1);

  /**Delete and show the list in the DOM */
  const listItems = document.querySelectorAll('.list-values ol li');
  listItems[positionToEliminate].remove();
  inputPosition.value = '';
}

function calculate(){
  const errorContainer = document.querySelector('.error-calculate');
}