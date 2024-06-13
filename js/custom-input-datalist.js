const customInputDatalists = document.querySelectorAll('.custom-input-datalist');

customInputDatalists.forEach((customInputDatalist) => {
  const input = customInputDatalist.querySelector('.custom-input-datalist__input');
  const datalist = customInputDatalist.querySelector('.custom-input-datalist__datalist');

  customInputDatalist.addEventListener('click', (event) => {
    if (event.currentTarget === event.target) {
      event.currentTarget.classList.remove('active');
      datalist.style.display = 'none';
    }
  });

  if (input && datalist) {
    input.addEventListener('focus', () => {
      datalist.style.display = 'block';
      customInputDatalist.classList.add('active');
    });

    [...datalist.options].forEach((option) => {
      option.addEventListener('click', () => {
        input.value = option.value;
        datalist.style.display = 'none';
        customInputDatalist.classList.remove('active');
      });
    });

    input.addEventListener('input', () => {
      const text = input.value.toUpperCase();
      [...datalist.options].forEach((option) => {
        if (option.value.toUpperCase().indexOf(text) > -1) {
          option.style.display = 'block';
        } else {
          option.style.display = 'none';
        }
      });
    });
  }
});

const adminMainContentFileElems = document.querySelectorAll('.admin-main__content-file');

adminMainContentFileElems.forEach((adminMainContentFileElem) => {
  const input = adminMainContentFileElem.querySelector('.admin-main__content-file-input');
  const fileText = adminMainContentFileElem.querySelector('.admin-main__content-file-text');

  input.addEventListener('change', (event) => {
    fileText.innerHTML = event.target.files[0].name;
  });
});
