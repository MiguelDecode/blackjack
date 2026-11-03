const SUITS = Object.freeze(["C", "D", "H", "S"]);
const SPECIAL_CARDS = Object.freeze(["J", "Q", "K", "A"]);
const MIN_NUMBER = 2;
const MAX_NUMBER = 10;

/**
 * Creates a standard 52-card deck (2-10, J, Q, K, A across four suits)
 * and shuffles it in place using the Fisher-Yates algorithm.
 *
 * @returns {string[]} A new shuffled deck; each card is a string such as "2C", "10H" or "AS".
 * @throws {Error} If the suits or special cards constants are not defined.
 * @example
 * const deck = createShuffledDeck();
 * deck.length; // 52
 */
export const createShuffledDeck = () => {
  if (!SUITS) throw new Error("Suits are neccessary");
  if (!SPECIAL_CARDS) throw new Error("Specials are neccessary");

  const deck = [];
  for (let i = MIN_NUMBER; i <= MAX_NUMBER; i++) {
    for (const suit of SUITS) {
      deck.push(i + suit);
    }
  }
  for (const special of SPECIAL_CARDS) {
    for (const suit of SUITS) {
      deck.push(special + suit);
    }
  }

  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  return deck;
};
