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
    const result = calculate();
    if(result){
      showResult('../img/visualizacion-de-datos.png',`El resultado de ${result} `);
    }
  });

  /**Event for buttonName */
  const comboBox = document.querySelector('#section-select');
  buttonCalculate.textContent = `Calcular ${comboBox.value}`;
  comboBox.addEventListener('input',(e)=>{
    buttonCalculate.textContent = `Calcular ${e.target.value}`;
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

  /**get the select with each option */
  const comboBox = document.querySelector('#section-select');

  /**Operations */
  let suma
  switch(comboBox.value){
    case 'Media Aritmética':
      if(valuesList.length <= 0){
        /**If valuesList is empty */
        errorMessage('Ingrese valores a la lista', errorContainer);
        return;
      }
      suma=0;
      suma = valuesList.reduce((previousValue, currentValue)=>previousValue+currentValue);
      const resultMedia = suma / valuesList.length;
      return `la Media Aritmética es: <span class="bold">${resultMedia.toFixed(2)}<span>`;
      break;
    case 'Media Armonica':
      if(valuesList.length <= 0){
        /**If valuesList is empty */
        errorMessage('Ingrese valores a la lista',errorContainer);
        return;
      }
      suma = 0;
      const inverseList = valuesList.map((value) => 1/value);

      suma = inverseList.reduce((previousValue, currentValue)=>{
        return previousValue + currentValue;
      });
      const resultMediaA = valuesList.length / suma;
      return `la Media Armónica es: <span class="bold">${resultMediaA.toFixed(3)}<span>`;
      break;
    case 'Media Geométrica':
      if(valuesList.length <= 0){
        /**If valuesList is empty */
        errorMessage('Ingrese valores a la lista',errorContainer);
        return;
      }
      suma = valuesList.reduce((previousValue,currentValue)=> previousValue * currentValue);
      const resultMediaG = Math.pow(suma,1/valuesList.length);
      return `la Media Geométrica es: <span class="bold">${resultMediaG.toFixed(3)}<span>`;
      break;
    case 'Mediana':
      if(valuesList.length <= 0){
        /**If valuesList is empty */
        errorMessage('Ingrese valores a la lista',errorContainer);
        return;
      }
      valuesList.sort((previousValue,currentValue) => previousValue - currentValue);
      return `la Mediana es: <span class="bold">${valuesList[Math.floor(valuesList.length/2)]}<span>`
      break;
    case 'Moda':
      if(valuesList.length <= 0){
        /**If valuesList is empty */
        errorMessage('Ingrese valores a la lista',errorContainer);
        return;
      }
      /**help Variables */
      let countList = [];      
      let indexNewNumber = 0;
      let isNewNumber = true;
      let indexCount = 0;
      /**sort the values */
      valuesList.sort((previousValue,currentValue) => previousValue - currentValue);     
      
      /**Create an array with the number and the count of repetitions */
      for (let index = 0; index < valuesList.length; index++) {
        if(valuesList[index] === valuesList[indexNewNumber]){
          /**If is a new number */
          if(isNewNumber){
            /**If is the start count */
            isNewNumber = false;
            countList[indexCount] = {
              number: valuesList[indexNewNumber],
              count: 1
            };
          }else{
            /**Count a repetition */
            countList[indexCount].count++;
          }
        }else{
          /**Change another number */
          indexCount++;
          indexNewNumber = index;
          isNewNumber = true;
          index--;
        }
      }    
      countList.sort((previousValue, currentValue)=> previousValue.count - currentValue.count); 
      /**Show the moda or two modas */
      if(countList[countList.length-2].count === countList[countList.length-1].count ){
        const moda = [countList[countList.length-2].number, countList[countList.length-1].number]
        return `la Moda es: <span class="bold">${moda[0]} y  ${moda[1]}<span>`;
      }else{
        const moda = countList[countList.length-1];
        return `la Moda es: <span class="bold">${moda.number}<span>`;
      }
      break;
  }
}