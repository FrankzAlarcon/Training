import {errorMessage} from './general.js';


document.addEventListener('DOMContentLoaded',()=>{
  const buttonCalculatePerimeter = document.querySelector('.calculatePerimeterTriangle');
  buttonCalculatePerimeter.addEventListener('click',(e)=>{
    trianglePerimeter();
  });
});

/** Triangle */

function trianglePerimeter(){
  try{
    let sideA = document.querySelector('#triangle-side-a');
    let sideB = document.querySelector('#triangle-side-b');
    let base = document.querySelector('#triangle-base');
    console.log(`${typeof sideA.value} ${sideB.value} ${base.value}`);
    if(!sideA.value || !sideB.value || !base.value){
      //Error: enter valid numbers
      const triangleConainer = document.querySelector('.alert-triangle');
      errorMessage('Ingrese números válidos',triangleConainer);
      return;
    }
    sideA = Number(sideA.value);
    sideB = Number(sideB.value);
    base = Number(base.value);
    console.log(`${sideA} ${sideB} ${base}`);

    if(sideA <= 0 || sideB <= 0 || base<=0){
      console.log('estoy en if')

    }
  }catch(error){
    console.log(error)
    const triangleConainer = document.querySelector('.alert-triangle');
    errorMessage('Ingrese números válidoddds',triangleConainer);
  }
}