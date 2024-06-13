const adminMainContentNav = document.querySelector('.admin-main__content-nav');
const adminMainContentWrapper = document.querySelector('.admin-main__content-wrapper');
const formClassName = '.admin-main__content-form';
const buttonClassName = '.admin-main__content-nav-button';
const adminMainContentForms = adminMainContentWrapper.querySelectorAll(formClassName);
const adminMainContentButtons = adminMainContentNav.querySelectorAll(buttonClassName);

adminMainContentForms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
});

if (adminMainContentNav && adminMainContentWrapper) {
  adminMainContentNav.addEventListener('click', (event) => {
    const isNavButton = event.target.classList.contains('admin-main__content-nav-button');
    const targetForm = document.getElementById(event.target.dataset.target);

    if (isNavButton && targetForm) {
      [...adminMainContentForms, ...adminMainContentButtons].forEach((element) => {
        element.classList.remove('active');
      });
      targetForm.classList.add('active');
      event.target.classList.add('active');
    }
  });
}
