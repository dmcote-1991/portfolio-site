'use strict';

/**
 * Handle mobile menu functionality to hide/reveal sidebar on mobile layouts
 */
const body = document.querySelector('body') as HTMLBodyElement;
let headerBtnClicked = false;

document.querySelector('#menu-icon')?.addEventListener('click', (e: Event) => {
  body.style.transform = headerBtnClicked ? 'translateX(0px)' : 'translateX(300px)';
  headerBtnClicked = !headerBtnClicked;
});
