import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'

const form = document.querySelector('form')
const inputWeight   = document.querySelector('#weight')
const inputHeight   = document.querySelector('#height')

form.onsubmit = function(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  if (notNumber(weight) || notNumber(height)){
    AlertError.open()
    return; 
  } else {
    AlertError.close()
  }

  const result = IMC(weight, height);

  Modal.message.innerText = `Seu IMC é de ${result}`
  Modal.open()
}

function IMC(weight, height){
  return (weight / (height / 100) ** 2 ).toFixed(2);
}

function notNumber(value){
  return isNaN(value) || value == ""
}