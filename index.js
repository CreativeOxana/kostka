let numberOnDice = 1;
const dice = document.querySelector('.dice');
const throwDice = () => {
  numberOnDice = numberOnDice + 1;
  if (numberOnDice === 7) {
    numberOnDice = 1;
  }
  dice.src = `img/side${numberOnDice}.svg`;
};
document.addEventListener('keydown', throwDice);
