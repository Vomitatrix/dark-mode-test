let heading = document.querySelector('h1');
let para = document.querySelector('p');
let btn = document.querySelector('button');
let darkModeOn = false;

btn.addEventListener('click', darkModeButton);


function darkModeButton() {
    if (!darkModeOn) {
        darkModeOn = true;
        document.body.style.backgroundColor = 'black';
        heading.style.color = 'white';
        para.style.color = 'white';
    } else {
        darkModeOn = false;
        document.body.style.backgroundColor = 'white';
        heading.style.color = 'black';
        para.style.color = 'black';
    }
}