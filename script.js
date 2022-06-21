let heading = document.querySelector('h1');
let para = document.querySelector('p');
let btn = document.querySelector('button');
let span = document.querySelector('span');
let darkModeOn = false;

function darkModeButton(btnBool, bgColor, textColor, btnText) {
    darkModeOn = btnBool;
    document.body.style.backgroundColor = bgColor;
    heading.style.color = textColor;
    para.style.color = textColor;
    span.textContent = btnText;
}

btn.addEventListener('click', () => {
    if (!darkModeOn) {
        darkModeButton(true, 'black', 'white', 'ON');
    } else {
        darkModeButton(false, 'white', 'black', 'OFF');
    }
})
