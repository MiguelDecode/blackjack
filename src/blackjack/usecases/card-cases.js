/**
 * Removes and returns the last card from the deck.
 *
 * @param {string[]} deck - Deck of cards, e.g. ["2C", "AS", "10H"].
 * @returns {string} The card taken from the end of the deck.
 * @throws {string} If the deck is empty.
 */
export const getCard = (deck) => {
  if (deck.length === 0) {
    throw "The deck don't have cards";
  }
  return deck.pop();
};

/**
 * Renders a card image inside the given player's card area.
 *
 * @param {string} card - Card identifier, e.g. "2C" or "AS".
 * @param {0 | 1} player - 0 for the human player, 1 for the computer.
 * @param {{ playerCards: HTMLElement, computerCards: HTMLElement }} elements - DOM references for the card containers.
 * @returns {void}
 */
export const drawCard = (card, player, elements) => {
  const cardImage = document.createElement("img");
  cardImage.alt = "A poker card image";
  cardImage.src = `public/assets/cards/${card}.png`;
  cardImage.classList.add("card");

  if (player === 0) {
    elements.playerCards.append(cardImage);
  } else if (player === 1) {
    elements.computerCards.append(cardImage);
  }
};

/**
 * Returns the Blackjack value of a card.
 * Face cards (J, Q, K) are worth 10 and aces (A) are worth 11.
 *
 * @param {string} card - Card identifier, e.g. "2C" or "AS".
 * @returns {number} The card's Blackjack value.
 */
export const cardValue = (card) => {
  const value = card.slice(0, -1);
  return isNaN(value) ? (value === "A" ? 11 : 10) : Number(value);
};
