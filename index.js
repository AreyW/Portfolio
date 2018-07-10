import Content from './src/Cont';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import greetUser from './src/greetUser';

var initialHTML = document.body.innerHTML;

document
    .querySelector('#root')
    .innerHTML = `
    ${Navigation}
    ${Header()}
    ${Content}
    ${Footer}
    ${initialHTML}
    `;

// greetUser();

