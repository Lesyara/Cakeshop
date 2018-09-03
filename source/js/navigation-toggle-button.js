'use strict';
(function () {
  var navButton = document.querySelector('.main-header__navigation-toggle-button');
  var navPanel = document.querySelector('.main-header__navigation');

  var navButtonMouseDownHandler = function (evt) {
    evt.preventDefault();
    if (navButton.classList.contains("main-header__navigation-toggle-button--closed") && navPanel.classList.contains("main-header__navigation--closed")) {
      navPanel.classList.remove("main-header__navigation--closed");
      navPanel.classList.add("main-header__navigation--opened");
      navButton.classList.remove("main-header__navigation-toggle-button--closed");
      navButton.classList.add("main-header__navigation-toggle-button--opened");
    } else if (navButton.classList.contains("main-header__navigation-toggle-button--opened") && navPanel.classList.contains("main-header__navigation--opened")) {
      navPanel.classList.remove("main-header__navigation--opened");
      navPanel.classList.add("main-header__navigation--closed");
      navButton.classList.remove("main-header__navigation-toggle-button--opened");
      navButton.classList.add("main-header__navigation-toggle-button--closed");
    }
  }
  navButton.addEventListener('click', navButtonMouseDownHandler);
})();

