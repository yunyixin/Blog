import ReactDOM from 'react-dom';
import App from './routes';

/*
if (_DEV_) {
  document.write(new Date());
}
*/

// require('./routes')

const main = () => {
  ReactDOM.render(App, document.querySelector('#root'));
};

document.addEventListener('DOMContentLoaded', main);