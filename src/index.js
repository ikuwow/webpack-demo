import { cube } from './math.js';

function component() {
  const element = document.createElement('div');
  const button = document.createElement('button');
  const br = document.createElement('br');

  element.innerHTML = _.join([
    'Hello', 'webpack!', '5 cubed is equal to ', cube(5)
  ], ' ');
  button.innerHTML = 'Click me and look at the console.';
  element.appendChild(br);
  element.appendChild(button);

  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    const print = module.default;
    print();
  });

  return element;
}

document.body.appendChild(component());
