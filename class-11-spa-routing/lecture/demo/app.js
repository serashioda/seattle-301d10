page('/', homeController);
page('/contact', contactController);

function homeController() {
  document.querySelector('p')
    .textContent = 'Index page was generated!';
};

function contactController() {
  document.querySelector('p')
    .textContent = 'Contact page was generated!';
};

page();
