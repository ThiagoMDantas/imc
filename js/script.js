import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { IMC , notNumber} from "./utils.js"

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
  } 
  
  const result = IMC(weight, height);

  Modal.message.innerText = `Seu IMC é de ${result}`
  Modal.open()
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()