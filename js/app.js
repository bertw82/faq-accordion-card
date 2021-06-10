// global variables
const btn = document.querySelectorAll('button[type="button"]');

// flip button on dropdown
btn.forEach(button => button.addEventListener('click', () => {
    if(button.classList.contains('flip')){
        button.classList.remove('flip');
    } else {
        button.classList.add('flip');
    };
    if(button.parentNode.firstElementChild.classList.contains('strong-font')){
        button.parentNode.firstElementChild.classList.remove('strong-font');
    } else {
        button.parentNode.firstElementChild.classList.add('strong-font');
    };
}));