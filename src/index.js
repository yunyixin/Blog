import ReactDom from 'react-dom';
import {Register} from './register/register';

/*
if (_DEV_) {
  document.write(new Date());
}
*/

const main = () => {
  ReactDom.render(Register, document.querySelector('#root'));
};

document.addEventListener('DOMContentLoaded', main);