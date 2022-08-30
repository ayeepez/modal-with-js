


let modalItem = document.getElementById("modal-option-card")
let appearOpenModal = document.getElementById("openModal")
let cancelModal = document.getElementById("closeModal")
let typeName = document.getElementById("personName")
let saveName = document.getElementById("saveName")
let nameElement= "";
let warnMessage= document.getElementById("warn-message")
let messageSent = document.getElementById("final-page")
let principalPage = document.getElementById("principal-page")
let messageAlreadySent = document.getElementById("message-card-already-sent")


appearOpenModal.addEventListener("click", function(e) {
  e.preventDefault();
  modalItem.style.visibility = "visible";
  modalItem.style.opacity = "1";
})

closeModal.addEventListener("click", function(e) {
  e.preventDefault();
  modalItem.style.visibility = "hidden";
  modalItem.style.opacity = "0";

  warnMessage.style.visibility = "hidden";
    warnMessage.style.opacity = "0";
})


saveName.addEventListener("click", function(e) {
  e.preventDefault();
  nameElement = typeName.value 
  
  if(nameElement == ""){
    warnMessage.style.visibility = "visible";
    warnMessage.style.opacity = "1";
  }else{
    warnMessage.style.visibility = "hidden";
    warnMessage.style.opacity = "0";

    modalItem.style.visibility = "hidden";
  modalItem.style.opacity = "0";

  principalPage.style.visibility = "hidden";
  principalPage.style.opacity = "0";

  messageAlreadySent.innerText = `Tu tarjeta se envió exitosamente a ${nameElement}!`
  messageSent.style.visibility = "visible";
  messageSent.style.opacity = "1";

  }
})

