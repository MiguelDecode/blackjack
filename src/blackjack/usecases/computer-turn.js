import { getCard, drawCard, cardValue } from "./card-cases";

export const computerTurn = (minimalPoints, computerPoints, deck, elements) => {
  do {
    const card = getCard(deck);
    computerPoints = computerPoints + cardValue(card);
    elements.computerPoints.innerText = computerPoints;
    drawCard(card, 1, elements);

    if (minimalPoints > 21) {
      break;
    }
  } while (computerPoints <= minimalPoints && minimalPoints <= 21);

  setTimeout(() => {
    if (computerPoints === minimalPoints) {
      alert("Draw");
    } else if (computerPoints > 21) {
      alert("Player wins");
    } else {
      alert("Computer wins");
    }
  }, 50);

  return computerPoints;
};
