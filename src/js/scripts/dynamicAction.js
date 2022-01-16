import planetMove from '../functions/dynamicPlanet';
import judgmentTimeframe from '../functions/dynamicBackground';

const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
/**
 * 現在の時刻を取得し、時刻にあった見た目にする
 * @returns {void}
 */
const dynamicFunction = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  planetMove(sun, moon, hour, min);
  judgmentTimeframe(hour);
};
dynamicFunction();
window.setInterval(() => dynamicFunction(), 60000);
