import { getCard, drawCard, cardValue } from "./card-cases";
import { computerTurn } from "./computer-turn";
import { createShuffledDeck } from "./create-deck";

/**
 * @typedef {Object} GameState
 * @property {string[]} deck - The current deck of cards.
 * @property {number} playerPoints - The human player's score.
 * @property {number} computerPoints - The computer's score.
 */

/**
 * @typedef {Object} GameElements
 * @property {HTMLElement} newGameBtn - Button that starts a new game.
 * @property {HTMLElement} getCardBtn - Button that draws a card for the player.
 * @property {HTMLElement} stopGameBtn - Button that ends the player's turn.
 * @property {HTMLElement} playerPoints - Element showing the player's score.
 * @property {HTMLElement} computerPoints - Element showing the computer's score.
 * @property {HTMLElement} playerCards - Container for the player's card images.
 * @property {HTMLElement} computerCards - Container for the computer's card images.
 */

/**
 * Resets the UI and state for a new game, including a freshly shuffled deck.
 *
 * @param {GameElements} elements - DOM references used to reset the board.
 * @returns {GameState} The initial game state.
 */
export const handleNewGame = (elements) => {
  elements.playerCards.innerHTML = "";
  elements.computerCards.innerHTML = "";
  elements.playerPoints.innerText = 0;
  elements.computerPoints.innerText = 0;
  elements.stopGameBtn.disabled = false;
  elements.getCardBtn.disabled = false;

  return { deck: createShuffledDeck(), playerPoints: 0, computerPoints: 0 };
};

/**
 * Draws a card for the human player, updates the score and UI,
 * and lets the computer play automatically when the player reaches 21.
 *
 * @param {string[]} deck - The current deck; the drawn card is removed from it.
 * @param {number} playerPoints - The player's score before drawing.
 * @param {number} computerPoints - The computer's score before drawing.
 * @param {GameElements} elements - DOM references used to render the game.
 * @returns {GameState} The updated game state.
 */
export const handleGetCard = (deck, playerPoints, computerPoints, elements) => {
  const card = getCard(deck);
  playerPoints = playerPoints + cardValue(card);
  elements.playerPoints.innerText = playerPoints;
  drawCard(card, 0, elements);

  if (playerPoints >= 21) {
    elements.getCardBtn.disabled = true;
    elements.stopGameBtn.disabled = true;
    computerPoints = computerTurn(playerPoints, computerPoints, deck, elements);
  }

  return { deck, playerPoints, computerPoints };
};

/**
 * Ends the player's turn and lets the computer play until it beats the player.
 *
 * @param {string[]} deck - The current deck; the computer draws from it.
 * @param {number} playerPoints - The player's final score.
 * @param {number} computerPoints - The computer's score before its turn.
 * @param {GameElements} elements - DOM references used to render the game.
 * @returns {GameState} The updated game state.
 */
export const handleStopGame = (
  deck,
  playerPoints,
  computerPoints,
  elements,
) => {
  computerPoints = computerTurn(playerPoints, computerPoints, deck, elements);
  elements.stopGameBtn.disabled = true;
  elements.getCardBtn.disabled = true;

  return { deck, playerPoints, computerPoints };
};
