import { setState } from '../config/state';
import { getRandomPost } from './api';

/**
 * ボトルメッセージの要素を生成します。
 * top: 50px ~ 90px;
 * left: 120px ~ 500px;
 * @returns {HTMLImageElement}
 */
export const createBottleElement = (message) => {
  const imageElement = document.createElement('img');
  imageElement.src = './images/common/bottle-message.svg';
  imageElement.alt = 'ボトルメッセージです';
  imageElement.style.top = `${Math.random() * 40 + 50}px`;
  imageElement.style.left = `${Math.random() * 380 + 120}px`;
  imageElement.classList.add('island__bottle-message');
  imageElement.textContent = message;
  return imageElement;
};

/**
 * 30%の確率でボトルメッセージを配置する
 * @returns {any}
 */
const bottleMessages = document.getElementById('bottleMessages');
const bottleButton = document.getElementById('bottleButton');
export const randomCreateBottle = async () => {
  if (Math.random() * 100 < 70) {
    bottleButton.remove();
    return;
  }
  const posts = await getRandomPost();
  setState(posts, posts);
  bottleMessages.appendChild(createBottleElement(posts[0].post_text));
};
