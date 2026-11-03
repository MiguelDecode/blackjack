/**
 * Updates a score element and reflects special hand states.
 *
 * @param {HTMLElement} element - Score element to update.
 * @param {number} points - Current hand value.
 * @returns {void}
 */
export const updateScore = (element, points) => {
  if (!element) return;
  element.textContent = points;
  element.classList.toggle("is-bust", points > 21);
  element.classList.toggle("is-blackjack", points === 21);
};

/**
 * Shows the result banner with a variant class.
 *
 * @param {{ result?: HTMLElement }} elements - DOM references.
 * @param {string} message - Text to display.
 * @param {"win" | "lose" | "draw"} type - Visual variant.
 * @returns {void}
 */
export const showResult = (elements, message, type = "draw") => {
  const { result } = elements;
  if (!result) return;
  result.textContent = message;
  result.className = `result result--${type}`;
  result.classList.add("show");
};

/**
 * Hides and clears the result banner.
 *
 * @param {{ result?: HTMLElement }} elements - DOM references.
 * @returns {void}
 */
export const clearResult = (elements) => {
  const { result } = elements;
  if (!result) return;
  result.textContent = "";
  result.className = "result";
};
