const title = document.getElementById('main_title');
const titleLetters = title.textContent.split('');
title.innerHTML = '';


setTimeout(function() {
    let char = 0;
    let timer = setInterval(onTick, 150);
    function onTick() {
        title.innerHTML += titleLetters[char];
        char++
        if (char === titleLetters.length) {
            complete(timer);
            return;
        } 
    }

}, 500);


const complete = (timer) => {
    clearInterval(timer);
    timer = null;
}