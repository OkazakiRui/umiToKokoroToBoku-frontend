/**
 * ボトルメッセージの要素を生成します。
 * top: 50px ~ 90px;
 * left: 120px ~ 500px;
 * @returns {HTMLImageElement}
 */
const createBottleElement = (message) => {
  const imageElement = document.createElement('img');
  imageElement.src = './images/common/bottle-message.svg';
  imageElement.alt = 'ボトルメッセージです';
  imageElement.style.top = `${Math.random() * 40 + 50}px`;
  imageElement.style.left = `${Math.random() * 380 + 120}px`;
  imageElement.classList.add('island__bottle-message');
  imageElement.textContent = message;
  return imageElement;
};

document
  .getElementById('bottleMessages')
  .appendChild(createBottleElement('Honcicab'));
