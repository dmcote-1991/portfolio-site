/**
 * Handle mobile menu functionality to hide/reveal sidebar on mobile layouts.
 * When the menu icon is clicked, the sidebar will slide in and out.
 */
// Select the body element for applying the transformation
const body = document.querySelector('body') as HTMLBodyElement;

// Track the state of the mobile menu (open or closed)
let headerBtnClicked = false;

// Add a click event listener to the menu icon
document.querySelector('#menu-icon')?.addEventListener('click', (e: Event) => {
  // Toggle the sidebar position: if it's clicked and open, slide it out; if closed, slide it in
  body.style.transform = headerBtnClicked ? 'translateX(0px)' : 'translateX(300px)';

  // Flip the state of headerBtnClicked to track whether the menu is open or closed
  headerBtnClicked = !headerBtnClicked;
});
