import { displayData } from '../config/display.js';
import { changeDisplay } from '../functions/display.js';
import { sendPost } from '../functions/api.js';
import notyf from '../functions/notyf.js';

// つぶやくボタン
const tweetButton = document.getElementById('tweetButton');
tweetButton.addEventListener('click', () => changeDisplay(displayData.tweet));
const tweetBackButton = document.getElementById('tweetBackButton');
tweetBackButton.addEventListener('click', () =>
  changeDisplay(displayData.default)
);

const tweetSendButton = document.getElementById('tweetSendButton');
const tweetTextArea = document.getElementById('tweetTextArea');
tweetSendButton.addEventListener('click', () => {
  if (!tweetTextArea.value) {
    notyf.error('メッセージが入力されていません!');
    return;
  }
  sendPost(tweetTextArea.value);
  tweetTextArea.value = '';
  changeDisplay(displayData.default);
});

// ボトルメッセージ
const bottleButton = document.getElementById('bottleButton');
const bottleTextArea = document.getElementById('bottleTextArea');
const bottleMessages = document.getElementById('bottleMessages');
bottleButton.addEventListener('click', () => {
  changeDisplay(displayData.bottle);
  bottleTextArea.value = bottleMessages.querySelector('img').textContent;
});
const bottleCloseButton = document.getElementById('bottleCloseButton');
bottleCloseButton.addEventListener('click', () =>
  changeDisplay(displayData.default)
);
