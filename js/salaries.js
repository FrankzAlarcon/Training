import {errorMessage,showResult} from './general.js';

document.addEventListener('DOMContentLoaded', ()=>{
  initApp();
});

const valuesPrecharged = [500,1800,3000,1200,4000,2000,1400,1400,1900,1200,2200,900,400,700,2500,1800,400,1500,2300,2300];
const valuesList = [];

function initApp(){
  const checkBox = document.querySelector('#check-box');
  let useValuesPrecharged = false;
  checkBox.addEventListener('input',(event)=>{
    useValuesPrecharged = event.target.checked;
  })
  /**Events to add, delete values in the list */
  const buttonAddValue = document.querySelector('.button-add--first');
  buttonAddValue.addEventListener('click', ()=>{
    addValue();
  });

  const buttonDeleteValue = document.querySelector('.button--delete');
  buttonDeleteValue.addEventListener('click',()=>{
    deleteValue();
  });
  
  /**Events to calculate */
  const buttonCalculate = document.querySelector('.button-calculate');
  buttonCalculate.addEventListener('click', ()=>{
    if(useValuesPrecharged){
      const result = calculousPrecharged(selectCalculates.value);
      showResult('../img/dollar.png',`El resultado de ${result}`);
    }else{
      const result = calculous(selectCalculates.value);
      showResult('../img/dollar.png',`El resultado de ${result}`);
    }
  });
  /**Change name button */
  const selectCalculates = document.querySelector('#select-calculates');
  buttonCalculate.textContent = `Calcular ${selectCalculates.value}`
  selectCalculates.addEventListener('click', (event)=>{
    buttonCalculate.textContent = `Calcular ${event.target.value}`;
  });
}

/**Operation in array precharged */
function calculousPrecharged(operation){
  valuesPrecharged.sort((first, second)=> first - second);
  if(operation === 'Mediana Salarial'){
    return `la Mediana Salarial es: <span class="bold">$${valuesPrecharged[Math.floor(valuesPrecharged.length / 2)]}<span>`;
  }else if(operation === 'Media Salarial TOP 10%'){
    let top10 = valuesPrecharged.length*0.1;
    let indexBeginTop10 = valuesPrecharged.length - top10;
    let suma = 0;
    for(let i = indexBeginTop10; i<valuesPrecharged.length; i++){
      suma += valuesPrecharged[i];
    }
    return `la Media Salarial de TOP 10% es: <span class="bold">$${suma / top10}<span>`; 
  }else{
    const errorContainer = document.querySelector('.error-calculate-value');
    errorMessage('Operación no válida', errorContainer);
  }
}

/**Funcionts */
function addValue(){
  const errorContainer = document.querySelector('.error-add-value');

  const inputNewValue = document.querySelector('#input-add-value');
  let newValue = inputNewValue;
  if(!newValue.value){
    /**If there is not a value */
    errorMessage('Ingrese un valor válido', errorContainer);
    return;
  }
  newValue = Number(newValue.value);
  if(isNaN(newValue)){
    /**If is not a number */
    errorMessage('Ingrese un valor válido', errorContainer);
    return;
  }
  if(newValue <= 0){
    errorMessage('El salario debe ser mayor a 0', errorContainer);
    return;
  }
  /**Add value to the list */
  valuesList.push(newValue);

  /**Show the value in the DOM */
  const listContainer = document.querySelector('.list-values-added ol');

  const listItem = document.createElement('LI');
  listItem.innerHTML = `$<span class="bold">${newValue}<span>`
  listContainer.appendChild(listItem);
  inputNewValue.value = '';
}

function deleteValue(){
  const errorContainer = document.querySelector('.error-delete-value');

  const inputPosition = document.querySelector('#input-delete-position');
  let position = inputPosition;
  if(!position.value){
    /**If there is not a value */
    errorMessage('Ingrese una posición válida', errorContainer);
    return;
  }
  position = Number(position.value) - 1;
  if(isNaN(position)){
    /**If is not a number */
    errorMessage('Ingrese una posición válida', errorContainer);
    return;
  }
  if(position < 0 || position >= valuesList.length){
    /**If the position is out of bounds */
    errorMessage('La posición ingresada no existe',errorContainer);
    return;
  }
  /**Remove the element in the values list */
  valuesList.splice(position,1);

  /**Remove the element in the DOM */
  const listItems = document.querySelectorAll('.list-values-added ol li');
  listItems[position].remove();
  inputPosition.value = '';
}

function calculous(operation){
  valuesList.sort((first, second)=> first - second);
  if(operation === 'Mediana Salarial'){
    return `la Mediana Salarial es: <span class="bold">$${valuesList[Math.floor(valuesList.length / 2)]}<span>`;
  }else if(operation === 'Media Salarial TOP 10%'){
    let top10 = Math.round(valuesList.length*0.1);
    if(top10 === 0){
      top10 = 1;
    }
    let indexBeginTop10 = valuesList.length - top10;
    let suma = 0;
    for(let i = indexBeginTop10; i<valuesList.length; i++){
      suma += valuesList[i];
    }
    return `la Media Salarial de TOP 10% es: <span class="bold">$${suma / top10}<span>`; 
  }else{
    const errorContainer = document.querySelector('.error-calculate-value');
    errorMessage('Operación no válida', errorContainer);
  }
}