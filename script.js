const about = document.getElementById('about');
console.log(about);
const title = document.getElementById('main_title');
const titleLetters = title.textContent.split('');
title.innerHTML = '';


setTimeout(function() {
    let char = 0;
    let timer = setInterval(onTick, 150);
    function onTick() {
        title.innerHTML += titleLetters[char];
        title.dataset.text = title.innerHTML;
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


about.addEventListener('click', function(){
    document.getElementById('about-text').classList.toggle('slide-in');
    document.getElementById('about-p').classList.toggle('text-appear');
});