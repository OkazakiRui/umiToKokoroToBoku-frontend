import { islandPreset } from '../config/dressUpItems';

/**
 * ボタンエレメントを生成します
 * @param {string} imageSrc
 * @param {string} alt
 * @returns {any}
 */
const createDressUpItem = (imageSrc, alt) => {
  const buttonElement = document.createElement('button');
  buttonElement.classList.add('ui-window__edit-item');
  const imageElement = document.createElement('img');
  imageElement.src = imageSrc;
  imageElement.alt = `${alt}のプレビュー画像`;
  buttonElement.appendChild(imageElement);
  return buttonElement;
};
const editList = document.getElementById('editList');
const dressUpIslandItem = () => {
  Object.keys(islandPreset).forEach((key) => {
    const { name, imageSrc } = islandPreset[key];
    editList.appendChild(createDressUpItem(imageSrc, name));
  });
};

dressUpIslandItem();
