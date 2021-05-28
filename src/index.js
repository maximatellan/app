import logMessage from './js/logger'
import './css/style.css'

// Log message to console
logMessage('Its finished!!')


function showValue(value){
	document.getElementById("range").innerHTML=value;
}


if (module.hot)       // eslint-disable-line no-undef
  module.hot.accept() // eslint-disable-line no-undef