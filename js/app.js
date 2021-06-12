// flip button on dropdown
const collapse = document.querySelectorAll('.collapse');

collapse.forEach(div => div.addEventListener('show.bs.collapse', function () {
    div.parentNode.firstElementChild.firstElementChild.nextElementSibling.classList.add('flip');
    div.parentNode.firstElementChild.firstElementChild.firstElementChild.classList.add('strong-font');
}));

collapse.forEach(div => div.addEventListener('hide.bs.collapse', function () {
    div.parentNode.firstElementChild.firstElementChild.nextElementSibling.classList.remove('flip');
    div.parentNode.firstElementChild.firstElementChild.firstElementChild.classList.remove('strong-font');
}));
