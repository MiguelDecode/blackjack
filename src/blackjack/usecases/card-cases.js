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

const SUIT_NAMES = Object.freeze({
  C: "clubs",
  D: "diamonds",
  H: "hearts",
  S: "spades",
});

const RANK_NAMES = Object.freeze({
  A: "Ace",
  J: "Jack",
  Q: "Queen",
  K: "King",
});

/**
 * Builds a human-readable card name.
 *
 * @param {string} card - Card identifier, e.g. "2C" or "AS".
 * @returns {string} A name such as "Ace of spades" or "10 of hearts".
 */
const cardName = (card) => {
  const suit = SUIT_NAMES[card.slice(-1)] ?? "unknown suit";
  const rank = card.slice(0, -1);
  return `${RANK_NAMES[rank] ?? rank} of ${suit}`;
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
  cardImage.alt = cardName(card);
  cardImage.src = `${import.meta.env.BASE_URL}assets/cards/${card}.png`;
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
