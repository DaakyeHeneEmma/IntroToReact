import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));

const btn = document.getElementById("register");
btn.addEventListener('click', e => {
    console.log("the btn is working") 
})

const moreBtn = document.getElementById("more-btn")
moreBtn.addEventListener('click', () => {
    console.log("explore places") 
})

// const navigate = document.querySelectorAll('.navigate');
// Array.from(navigate).forEach( e => {
//     e.addEventListener('click', (evt) => {
//      let li = evt.target.parentElement.parentElement
//      let equalSign = li.textContent[0]
//      console.log(equalSign) 
//     })
// })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
