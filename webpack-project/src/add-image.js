import Angular from './angular.jpg';
import altText from './altText.txt';

function addImage() {
    const img = document.createElement('img');
    img.alt = altText;
    img.width = 300;
    img.height = 300;
    img.src = Angular;
    const body = document.querySelector('body');
    body.appendChild(img);
}   

export default addImage;