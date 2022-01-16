/**
 * 太陽の位置を計算します
 * @param {number} hour
 * @param {number} min
 * @returns {number}
 */
const sunCalc = function (hour, min) {
  return (hour - 6) * -15 - 15 * (min / 60);
};

/**
 * 月の位置を計算します
 * @param {number} hour
 * @param {number} min
 * @returns {number}
 */
const moonCalc = function (hour, min) {
  return (hour - 18) * -15 - 15 * (min / 60);
};

/**
 * 惑星を動かします
 * @param {object} sunElement
 * @param {object} moonElement
 * @param {number} hour
 * @param {number} min
 * @returns {void}
 */
const planetMove = (sunElement, moonElement, hour, min) => {
  sunElement.style.transform = `rotate(${sunCalc(hour, min)}deg)`;
  moonElement.style.transform = `rotate(${moonCalc(hour, min)}deg)`;
};

export default planetMove;
