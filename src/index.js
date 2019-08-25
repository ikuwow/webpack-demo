import _ from 'lodash';
import './style.css';
import yattemiyou from './yattemiyou.jpg';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const icon = new Image();
  icon.src = yattemiyou;
  element.appendChild(icon);

  return element;
}

document.body.appendChild(component());
