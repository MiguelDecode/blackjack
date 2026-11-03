import { createShuffledDeck } from "./usecases/create-deck";
import {
  handleNewGame,
  handleGetCard,
  handleStopGame,
} from "./usecases/handle-cases";

const game = (() => {
  "use strict";

  let playerPoints = 0;
  let computerPoints = 0;
  let deck = createShuffledDeck();

  // HTML References
  const elements = {
    newGameBtn: document.getElementById("btnNewGame"),
    getCardBtn: document.getElementById("btnGetCard"),
    stopGameBtn: document.getElementById("btnStopGame"),
    playerPoints: document.getElementById("player-points"),
    computerPoints: document.getElementById("computer-points"),
    playerCards: document.getElementById("player-cards"),
    computerCards: document.getElementById("computer-cards"),
  };

  // EventListener
  const init = () => {
    elements.newGameBtn?.addEventListener("click", () => {
      ({ deck, playerPoints, computerPoints } = handleNewGame(elements));
    });
    elements.getCardBtn?.addEventListener("click", () => {
      ({ deck, playerPoints, computerPoints } = handleGetCard(
        deck,
        playerPoints,
        computerPoints,
        elements,
      ));
    });
    elements.stopGameBtn?.addEventListener("click", () => {
      ({ deck, playerPoints, computerPoints } = handleStopGame(
        deck,
        playerPoints,
        computerPoints,
        elements,
      ));
    });
  };

  init();

  return {
    init,
  };
})();
