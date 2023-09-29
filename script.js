const form = document.querySelector('form')
const inputWeight   = document.querySelector('#weight')
const inputHeight   = document.querySelector('#height')

const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),
  
  open(){
    Modal.wrapper.classList.add("open")
  },
  close(){
    Modal.wrapper.classList.remove("open")
  }
}

form.onsubmit = function(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  const result = IMC(weight, height);

  Modal.message.innerText = `Seu IMC é de ${result}`
  Modal.open()
}

Modal.buttonClose.onclick = () => {
  inputWeight.value = ""
  inputHeight.value = ""
  Modal.close()
}

function IMC(weight, height){
  return (weight / (height / 100) ** 2 ).toFixed(2);
}
