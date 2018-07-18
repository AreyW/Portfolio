import Content from './src/Cont';
import Footer from './src/Footer';
import Header from './src/Header';
import Navigation from './src/Navigation';

var State ={
    'Home': {
        'links': [ 'Blog', 'Contact', 'Projects' ],
        'title': 'Areanna Home page'
    },
    'Blog': {
        'links': [ 'Home', 'Contact', 'Projects' ],
        'title': 'Welcome to my blog page'
    },
    'Contact': {
        'links': [ 'Home', 'Blog', 'Projects' ],
        'title': 'Contact Me'
    },
    'Projects': {
        'links': [ 'Home', 'Blog', 'Contact' ],
        'title': ' my projects page'
    },
};
    
var root = document.querySelector('#root');
function render(state){
    var greeting;
    var input;
    var links;
    var i = 0;
    root.innerHTML = `
        ${Navigation}
        ${Header(state)}
        ${Content}
        ${Footer} 
    `;

    greeting = document.querySelector('#greeting');
    input =document.querySelector('#header input');
    
        input.addEventListener(
            'keyup', 
            (event) => greeting.innerHTML = `
             <div>
                <h3>Welcome to my home page,</h3>
                <h4>${event.target.value}</h4>
                </div>
                `
            );
            links = document.querySelectorAll('#navigation a');
            
            while(i < links.length){
                links[i].addEventListener(
                    'click',
                    (event) => {
                        var page =event.target.textContent
                    
                        event.preventDefault();
                    
                        render(State[page]);
            }
        );
        i++;
    }

 }

    render(State['Home']);