import { getCard, drawCard, cardValue } from "./card-cases";
import { showResult, updateScore } from "./ui";

export const computerTurn = (minimalPoints, computerPoints, deck, elements) => {
  do {
    const card = getCard(deck);
    computerPoints = computerPoints + cardValue(card);
    updateScore(elements.computerPoints, computerPoints);
    drawCard(card, 1, elements);

    if (minimalPoints > 21) {
      break;
    }
  } while (computerPoints <= minimalPoints && minimalPoints <= 21);

  setTimeout(() => {
    if (computerPoints === minimalPoints) {
      showResult(elements, "Draw", "draw");
    } else if (computerPoints > 21) {
      showResult(elements, "Player wins", "win");
    } else {
      showResult(elements, "Computer wins", "lose");
    }
  }, 500);

  return computerPoints;
};
