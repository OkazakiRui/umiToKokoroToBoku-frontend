/**
 * 背景やフィルターの時間帯を変更します
 * @param {string} timeframe
 * @returns {void}
 */
const changeTimeframe = (timeframe) => {
  const main = document.getElementById('main');
  main.classList.remove('morning', 'daytime', 'evening', 'night');
  main.classList.add(timeframe);
};

/**
 * 時間によって背景やフィルターの時間帯を変更します
 * @param {number} hour
 * @returns {void}
 */
const judgmentTimeframe = (hour) => {
  if (hour >= 6 && hour < 12) changeTimeframe('morning');
  if (hour >= 12 && hour < 17) changeTimeframe('daytime');
  if (hour >= 17 && hour < 19) changeTimeframe('evening');
  if (hour >= 19 || hour < 6) changeTimeframe('night');
};

export default judgmentTimeframe;
