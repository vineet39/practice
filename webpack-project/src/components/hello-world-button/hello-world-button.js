// function helloWorld() {
//     console.log("Hello World")
// }

// export default helloWorld;

// import './hello-world-button.css';

import './hello-world.scss';

class HelloWorldButton {
    buttonCSSClass = 'hello-world-button';
    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello World';
        const body = document.querySelector('body');
        button.classList.add(this.buttonCSSClass);
        button.onclick = function() {
            const p = document.createElement('p');
            p.innerHTML = 'Hello World';
            p.classList.add('hello-world-text');
            body.appendChild(p);
        }
        body.appendChild(button);
    }
}

export default HelloWorldButton;