import {errorMessage,showResult} from './general.js';

document.addEventListener('DOMContentLoaded', ()=>{
  initApp();
});

function initApp(){
  /**Button Event Listener */
  const buttonCalculate = document.querySelector('.button-calculate-discount');
  buttonCalculate.addEventListener('click', ()=>{
    const result = calculate();
    if(result){
      showResult('../img/discount.png',`El total a pagar es: <span class="bold">$${result}<span>`);
    }
  });
}

function calculate(){
  const errorContainer = document.querySelector('.alert-discount');

  /**Get inputs */
  let result = 0;
  let totalPrice = document.querySelector('#input-price');
  let discount = document.querySelector('#input-discount');
  let coupon = document.querySelector('#input-coupon');

  if(!totalPrice.value){
    //Error: Enter values
    errorMessage('Ingrese el precio total', errorContainer);
    return;
  }
  totalPrice = Number(totalPrice.value);
  if(totalPrice){
    result = totalPrice;
  }
  discount = Number(discount.value);
  if(discount){
    if(discount>=0 && discount<=50){
      result = result*(1 - discount/100);
    }else{
      errorMessage('Solo hay descuento de 0% - 50%', errorContainer);
      return;
    }
  }
  if(coupon.value){
    switch(coupon.value){
      case 'Promo-10%':
        result = result * 0.9
        break;
      case 'Promo-15%':
        result = result * 0.85;
        break;
      case 'Promo-20%':
        result = result * 0.80;
        break
      default:
        errorMessage('Ingrese un cupón válido',errorContainer);
        break;
    }
  }
  return result.toFixed(2);
}

