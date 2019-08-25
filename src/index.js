import _ from 'lodash';
import './style.css';
import yattemiyou from './yattemiyou.jpg';
import Data from './data.xml';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const icon = new Image();
  icon.src = yattemiyou;
  element.appendChild(icon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
