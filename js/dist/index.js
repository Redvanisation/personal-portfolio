'use strict';

var navBackground = document.querySelector('.navigation__nav');
var checkbox = document.querySelector('.navigation__checkbox');

navBackground.addEventListener('click', function () {
    // console.log('done', navBackground, checkbox);
    checkbox.checked = false;
});