import { displayData } from '../config/display.js';
import { changeDisplay } from '../functions/display.js';
import { sendPost } from '../functions/api.js';
import notyf from '../functions/notyf.js';
import { islandPreset } from '../config/dressUpItems.js';
import { getState, setState } from '../config/state.js';

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

// ボトルメッセージを開く
const bottleButton = document.getElementById('bottleButton');
const bottleTextArea = document.getElementById('bottleTextArea');
const bottleMessages = document.getElementById('bottleMessages');
bottleButton.addEventListener('click', () => {
  if (!bottleMessages.querySelector('img')) return;
  changeDisplay(displayData.bottle);
  bottleTextArea.value = bottleMessages.querySelector('img').textContent;
});
const bottleCloseButton = document.getElementById('bottleCloseButton');
bottleCloseButton.addEventListener('click', () =>
  changeDisplay(displayData.default)
);

// 島の着せ替え
const main = document.getElementById('main');
const islandDressUpButton = document.getElementById('islandDressUpButton');
const islandDressList = document.getElementById('islandDressList');
islandDressUpButton.addEventListener('click', () => {
  changeDisplay(displayData.islandDressUpButton);
  const dressUpButtons = document.querySelectorAll('.ui-window__edit-item');
  islandDressList
    .querySelector('.ui-window__edit-item--selected')
    .classList.remove('ui-window__edit-item--selected');
  // グローバルstateを参照して現在のプリセットにカーソルが行く
  const globalstate = getState();
  dressUpButtons[Number(globalstate.islandPreset.slice(6)) - 1].classList.add(
    'ui-window__edit-item--selected'
  );
  dressUpButtons.forEach((el) => {
    el.addEventListener('click', () => {
      // 全ての選択済みプリセットを削除する
      islandDressList
        .querySelector('.ui-window__edit-item--selected')
        .classList.remove('ui-window__edit-item--selected');
      el.classList.add('ui-window__edit-item--selected');
      // メインのクラスを付け替えている
      main.classList.remove(...Object.keys(islandPreset));
      main.classList.add(el.children[0].alt);
    });
  });
});
// 戻るボタンの処理
const islandDressUpBackButton = document.getElementById(
  'islandDressUpBackButton'
);
islandDressUpBackButton.addEventListener('click', () => {
  // メインのクラスを付け替えている
  main.classList.remove(...Object.keys(islandPreset));
  const globalstate = getState();
  main.classList.add(globalstate.islandPreset);
  changeDisplay(displayData.default);
});
// 保存ボタンの処理
const islandDressUpSaveButton = document.getElementById(
  'islandDressUpSaveButton'
);
islandDressUpSaveButton.addEventListener('click', () => {
  const nowPreset = islandDressList.querySelector(
    '.ui-window__edit-item--selected img'
  ).alt;
  setState('islandPreset', nowPreset);
  notyf.success('保存に成功しました!');
  changeDisplay(displayData.default);
});
