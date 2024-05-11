import './custom-select.js';

const accordionFeature = document.querySelector('.game-details__info-accordion_feature');

if (accordionFeature) {
  const infoItem = accordionFeature.querySelector('.game-details__info-item');

  const isInfoItemLengthCorrect = infoItem.innerText.length > 64;

  const infoItemMaxHeight = `${24 * 2}px`;

  if (isInfoItemLengthCorrect && infoItem) {
    const infoItemToggler = document.createElement('button');
    infoItemToggler.classList.add('game-details__info-accordion-button');
    infoItemToggler.innerText = 'Развернуть';
    accordionFeature.append(infoItemToggler);
    infoItem.style.maxHeight = infoItemMaxHeight;

    infoItemToggler.addEventListener('click', (event) => {
      if (infoItem.style.maxHeight === infoItemMaxHeight) {
        infoItem.style.maxHeight = infoItem.scrollHeight + 'px';
        event.currentTarget.classList.add('active');
        event.currentTarget.innerText = 'Свернуть';
      } else {
        infoItem.style.maxHeight = infoItemMaxHeight;
        event.currentTarget.classList.remove('active');
        event.currentTarget.innerText = 'Развернуть';
      }
    });
  }
}

const accordionDescription = document.querySelector('.game-details__info-accordion_description');

if (accordionDescription) {
  const infoItem = accordionDescription.querySelector('.game-details__info-item');

  const isInfoItemLengthCorrect = infoItem.innerText.length > 180;

  const infoItemMaxHeight = `${24 * 6}px`;

  if (isInfoItemLengthCorrect && infoItem) {
    const infoItemToggler = document.createElement('button');
    infoItemToggler.classList.add('game-details__info-accordion-button');
    infoItemToggler.innerText = 'Развернуть';
    accordionDescription.append(infoItemToggler);
    infoItem.style.maxHeight = infoItemMaxHeight;

    infoItemToggler.addEventListener('click', (event) => {
      if (infoItem.style.maxHeight === infoItemMaxHeight) {
        infoItem.style.maxHeight = infoItem.scrollHeight + 'px';
        event.currentTarget.classList.add('active');
        event.currentTarget.innerText = 'Свернуть';
      } else {
        infoItem.style.maxHeight = infoItemMaxHeight;
        event.currentTarget.classList.remove('active');
        event.currentTarget.innerText = 'Развернуть';
      }
    });
  }
}
