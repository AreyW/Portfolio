import Content from './src/Content';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';
import * as State from './store';
import navigo from 'navigo';
import axios from 'axios';
import { capitalize } from 'lodash';

var root = document.querySelector('#root');
var router = new navigo(location.origin);

State.posts = [];


function render(state){
    var greeting;
    var input;
    
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state, State.posts)}
    ${Footer}
    `;
    
    greeting = document.querySelector('#greeting');
    input = document.querySelector('#header input');
    input.addEventListener(
        'keyup',
        (event) => greeting.innerHTML = `
        <div>
        <h3>Welcome to my home page,</h3>
        <h4>${event.target.value}</h4>
        </div>
        `
    );
    router.updatePageLinks();
}
function handleRoute(params){
    var page = capitalize(params.page);
    render(State[page]);
}

router
    .on('/:page', handleRoute)
    .on('/', () => handleRoute({ 'page': 'home' }))
    .resolve();
            
 axios('https://jsonplaceholder.typicode.com/posts').then((response) => {
    var params = router.lastRouteResolved().params;

        State.post = response.data;

        if(params){
        handleRoute(params);
    }
 });
