import {errorMessage,showResult} from './general.js';


document.addEventListener('DOMContentLoaded',()=>{
  initApp();
});

function initApp(){
  /**Triangle buttons Events*/

  //Calculate Perimeter
  const buttonTrianglePerimeter = document.querySelector('.calculatePerimeterTriangle');
  buttonTrianglePerimeter.addEventListener('click', ()=>{
    const result = trianglePerimeter();
    if(result){
      showResult('../img/triangle.png',`El perímetro es: <span class="bold">${result}cm<span>`);
    }
  });

  //Calculate Area
  const buttonTriangleArea = document.querySelector('.calculateAreaTriangle');
  buttonTriangleArea.addEventListener('click', ()=>{
    const result = triangleArea();
    if(result){
      showResult('../img/triangle.png',`El área es: <span class="bold">${result}cm&sup2<span>`);
    }
  });

  /**Square Buttons Events*/

  //Calculate Perimeter
  const buttonSquarePerimeter = document.querySelector('.calculateSquarePerimeter');
  buttonSquarePerimeter.addEventListener('click',()=>{
    const result = squareOperation('perimeter');
    if(result){
      showResult('../img/square.png', `El perímetro es: <span class="bold">${result}cm<span>`);
    }
  });

  //Calculate Area
  const buttonSquareArea = document.querySelector('.calculateSquareArea');
  buttonSquareArea.addEventListener('click',()=>{
    const result = squareOperation('area');
    if(result){
      showResult('../img/square.png', `El área es: <span class="bold">${result}cm&sup2<span>`);
    }
  });

  /**Rectangle Buttons Events */

  //Calculate Perimeter
  const buttonRectanglePerimeter = document.querySelector('.calculate-rectangle-perimeter');
  buttonRectanglePerimeter.addEventListener('click', ()=>{
    const result = rectangleOperation('perimeter');
    if(result){
      showResult('../img/cube.png', `El perímetro es: <span class="bold">${result}cm<span>`);
    }
  });

  const buttonRectangleArea = document.querySelector('.calculate-rectangle-area');
  buttonRectangleArea.addEventListener('click',()=>{
    const result = rectangleOperation('area');
    if(result){
      showResult('../img/cube.png', `El área es: <span class="bold">${result}cm&sup2<span>`);
    }
  });

  /**Circle Buttons Events */
  const buttonCirclePerimeter = document.querySelector('.calculate-perimeter-circle');
  buttonCirclePerimeter.addEventListener('click', ()=>{
    const result = circleOperation('perimeter').toFixed(2);
    if(result){
      showResult('../img/circulo-formula-perimetro-radio.png', `El perímetro es: <span class="bold">${result}cm<span>`);
    }
  });

  const buttonCircleArea = document.querySelector('.calculate-are-circle');
  buttonCircleArea.addEventListener('click',()=>{
    const result = circleOperation('area').toFixed(2);
    if(result){
      showResult('../img/circulo-formula-perimetro-radio.png', `El área es: <span class="bold">${result}cm&sup2<span>`);
    }
  });

  const buttonCircleDiameter = document.querySelector('.calculate-diameter-circle');
  buttonCircleDiameter.addEventListener('click', ()=>{
    const result = circleOperation('diameter').toFixed(2);
    if(result){
      showResult('../img/circulo-formula-perimetro-radio.png', `El diámetro es: <span class="bold">${result}cm<span>`);
    }
  });
}

/** Triangle functions*/
function trianglePerimeter(){
  try{
    /**Get container for alert messages */
    const triangleContainer = document.querySelector('.alert-triangle');

    /**Get inputs */
    let sideA = document.querySelector('#triangle-side-a');
    let sideB = document.querySelector('#triangle-side-b');
    let base = document.querySelector('#triangle-base'); 

    if(!sideA.value || !sideB.value || !base.value){
      //Error: enter valid numbers
      errorMessage('Ingrese los datos necesarios',triangleContainer);
      return;
    }

    /**Transform input values to number */
    sideA = Number(sideA.value);
    sideB = Number(sideB.value);
    base = Number(base.value);

    if(sideA <= 0 || sideB <= 0 || base<=0){
      /**If the numbers are not valid */
      errorMessage('Los números deben ser mayores a 0', triangleContainer)
      return ;
    }
    return sideA + sideB + base;
  }catch(error){
    console.log(error)
    const triangleContainer = document.querySelector('.alert-triangle');
    errorMessage('Ingrese números válidos',triangleContainer);
  }
}

function triangleArea(){
  try{
    /**Get container for alert messages */
    const triangleContainer = document.querySelector('.alert-triangle');

    /**Get inputs */
    let base = document.querySelector('#triangle-base'); 
    let height = document.querySelector('#triangle-height');
    if(!base.value || !height.value){
      //Error: enter valid numbers
      errorMessage('Ingrese los datos necesarios',triangleContainer);
      return;
    }

    /**Transform input values to number */
    base = Number(base.value);
    height = Number(height.value);
    if(base<=0 || height<=0){
      /**If the numbers are not valid */
      errorMessage('Los números deben ser mayores a 0', triangleContainer)
      return ;
    }
    return base*height;
  }catch(error){
    console.log(error)
    const triangleContainer = document.querySelector('.alert-triangle');
    errorMessage('Ingrese números válidos',triangleContainer);
  }
}

/** Square functions*/
function squareOperation(operation){
  try{
    /**Get container for alert messages */
    const squareContainer = document.querySelector('.alert-square');

    /**Get inputs */
    let side = document.querySelector('#square-side'); 

    if(!side.value){
      //Error: enter valid numbers
      errorMessage('Ingrese los datos necesarios',squareContainer);
      return;
    }

    /**Transform input values to number */
    side = Number(side.value);

    if(side<=0){
      /**If the numbers are not valid */
      errorMessage('Los números deben ser mayores a 0', squareContainer)
      return ;
    }
    if(operation === 'perimeter'){
      return side*4;
    }else if(operation === 'area'){
      return side*side;
    }
  }catch(error){
    console.log(error)
    const squareContainer = document.querySelector('.alert-square');
    errorMessage('Ingrese números válidos',squareContainer);
  }
}

/**Rectangle functions */
function rectangleOperation(operation){
  try{
    /**Get container for alert messages */
    const rectangleContainer = document.querySelector('.alert-rectangle');

    /**Get inputs */
    let height = document.querySelector('#rectangle-height'); 
    let width = document.querySelector('#rectangle-width');

    if(!height.value || !width.value){
      //Error: enter valid numbers
      errorMessage('Ingrese los datos necesarios',rectangleContainer);
      return;
    }

    /**Transform input values to number */
    height = Number(height.value);
    width = Number(width.value);
    if(height<=0 || width <=0){
      /**If the numbers are not valid */
      errorMessage('Los números deben ser mayores a 0', rectangleContainer)
      return ;
    }
    if(operation === 'perimeter'){
      return height*2+width*2;
    }else if(operation === 'area'){
      return height*width;
    }
  }catch(error){
    console.log(error)
    const rectangleContainer = document.querySelector('.alert-rectangle');
    errorMessage('Ingrese números válidos',rectangleContainer);
  }
}

/**Circle functions */
function circleOperation(operation){
  try{
    /**Get container for alert messages */
    const circleContainer = document.querySelector('.alert-circle');

    /**Get inputs */
    let radio = document.querySelector('#cicle-r'); 

    if(!radio.value){
      //Error: enter valid numbers
      errorMessage('Ingrese los datos necesarios',circleContainer);
      return;
    }

    /**Transform input values to number */
    radio = Number(radio.value);

    if(radio<=0){
      /**If the numbers are not valid */
      errorMessage('Los números deben ser mayores a 0', circleContainer)
      return ;
    }
    if(operation === 'perimeter'){
      return 2*radio*Math.PI;
    }else if(operation === 'area'){
      return Math.PI*radio*radio;
    } else if (operation === 'diameter'){
      return radio*2;
    }
  }catch(error){
    console.log(error)
    const circleContainer = document.querySelector('.alert-square');
    errorMessage('Ingrese números válidos',circleContainer);
  }
}
