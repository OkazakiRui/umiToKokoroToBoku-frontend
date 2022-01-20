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

// =================================================
// 動画撮影用の処理
// let hour = 0,
//   min = 0;
// window.setInterval(() => {
//   if (min === 60) {
//     min = 0;
//     hour++;
//     if (hour === 25) hour = 0;
//   } else {
//     min += 20;
//   }
//   planetMove(sun, moon, hour, min);
//   judgmentTimeframe(hour);
// }, 100);
// =================================================
