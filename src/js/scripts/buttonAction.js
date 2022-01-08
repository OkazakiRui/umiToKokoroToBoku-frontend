import { displayData } from '../config/display.js';
import { changeDisplay } from '../functions/display.js';
const tweetButton = document.getElementById('tweetButton');
tweetButton.addEventListener('click', () => changeDisplay(displayData.tweet));
const tweetBackButton = document.getElementById('tweetBackButton');
tweetBackButton.addEventListener('click', () =>
  changeDisplay(displayData.default)
);

const tweetSendButton = document.getElementById('tweetSendButton');
tweetSendButton.addEventListener('click', () => {
  // ToDo: dbに追加する処理を作成する
  // ToDo: 問題なく呟けた場合に発生させる通知を作成する
  changeDisplay(displayData.default);
});
