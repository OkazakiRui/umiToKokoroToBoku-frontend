import { displayData } from '../config/display.js';
import { changeDisplay } from '../functions/display.js';
import { sendPost } from '../functions/api.js';

const tweetButton = document.getElementById('tweetButton');
tweetButton.addEventListener('click', () => changeDisplay(displayData.tweet));

const tweetBackButton = document.getElementById('tweetBackButton');
tweetBackButton.addEventListener('click', () =>
  changeDisplay(displayData.default)
);

const tweetSendButton = document.getElementById('tweetSendButton');
const tweetTextArea = document.getElementById('tweetTextArea');
tweetSendButton.addEventListener('click', (e) => {
  if (!tweetTextArea.value) {
    // message がない時の処理
    return;
  }
  // ToDo: 問題なく呟けた場合に発生させる通知を作成する
  sendPost(tweetTextArea.value);
  changeDisplay(displayData.default);
});
