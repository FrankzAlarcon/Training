function errorMessage(message,container){

  /**If already exist an errorMessage */
  const previousMessageError = document.querySelector('.error');
  if(previousMessageError){
    previousMessageError.remove();
  }

  /**Create the container for the message */
  const messageContainer = document.createElement('P');
  messageContainer.textContent=message;
  messageContainer.classList.add('error');

  /**Add the messageContainer to the parentContainer */
  container.appendChild(messageContainer);

  /**Eliminate the alert after 3 seconds */
  setTimeout(()=>{
    messageContainer.remove();
  },3000);

}
function showResult(dirImage, result){
  resetInputs();
  /**Add class to fixed body */
  const body = document.querySelector('body');
  body.classList.add('body-hidden');

  /**create container for the result */
  const container = document.createElement('DIV');
  container.classList.add('container__result');

  /**create children tags */
  const close = document.createElement('P');
  close.classList.add('close-button');
  close.textContent = 'X';
  const img = document.createElement('IMG');
  img.classList.add('result__img');
  img.src=dirImage;
  const text = document.createElement('P');
  text.classList.add('result__text');
  text.innerHTML = result;

  /**Add children to the DIV parent*/
  container.appendChild(close);
  container.appendChild(img);
  container.appendChild(text);

  /**Add container to the DOM */
  const show = document.querySelector('.result-operations');
  show.classList.add('show-result')
  show.appendChild(container);

  /**Close click in X */
  close.onclick = ()=>{
    body.classList.remove('body-hidden');
    show.classList.remove('show-result');
    container.remove();
  };

  /**Click in blue container */
  let allowClose = true;
  container.onclick = ()=>{
    allowClose = false;
  }

  /**Close click out of blue box */
  show.onclick = ()=>{
    if(allowClose){
      //if click out of blue container
      body.classList.remove('body-hidden');
      show.classList.remove('show-result');
      container.remove();
    }
    allowClose = true;
  }
  
}
function resetInputs(){
  const allInputs = document.querySelectorAll('input[type=number],input[type=text]');
  allInputs.forEach((input)=>{
    input.value='';
  });
}
export{
  errorMessage,
  showResult
}
