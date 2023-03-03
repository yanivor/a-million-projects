const calcModulo = (cardsInRow, numCards) => {
  if (cardsInRow > numCards) {
    return cardsInRow - numCards;
  }

  let multiplier = 1;
  while (multiplier * cardsInRow < numCards) {
    multiplier++;
  }

  const modulo = (multiplier * cardsInRow) % numCards;

  if (modulo > 0) {
    return modulo;
  }

  return 0;
};

const fillCards = () => {
  const categories = document.querySelectorAll('.cards');

  categories.forEach((category, key) => {
    const cardsInCategory = category.querySelectorAll('.card');
    const numCards = cardsInCategory.length;
    let cardsInRow = 0;

    if (screen.availWidth <= 570) {
      cardsInRow = 1;
    } else if (screen.availWidth >= 571 && screen.availWidth <= 860) {
      cardsInRow = 2;
    } else if (screen.availWidth >= 861 && screen.availWidth <= 1200) {
      cardsInRow = 3;
    } else if (screen.availWidth >= 1201) {
      cardsInRow = 4;
    }

    const modulo = calcModulo(cardsInRow, numCards);
    
    for (let i=0;i<modulo;i++) {
      const newCard = document.createElement('div');
      newCard.classList.add('blank-card');
      category.appendChild(newCard);
    }
  });
};

(() => {
  fillCards();

  addEventListener('resize', () => {
    fillCards();
  });
})();