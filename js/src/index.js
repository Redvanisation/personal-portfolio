const navBackground = document.querySelector('.navigation__nav');
const checkbox = document.querySelector('.navigation__checkbox');



navBackground.addEventListener('click', () => {
    // console.log('done', navBackground, checkbox);
    checkbox.checked = false;
});