import './style.css';
import Icon from './icon.svg';
import Data from './data.xml';

function component() {
  let element = document.createElement('div');
  element.innerHTML = ['Hello', 'webpack'].join(" ");
  element.classList.add('hello');
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());