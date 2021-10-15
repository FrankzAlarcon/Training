function errorMessage(message,container){

  /**If already exist an errorMessage */
  const previousMessageError = document.querySelector('.error');
  if(previousMessageError){
    return;
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

export{
  errorMessage
}
