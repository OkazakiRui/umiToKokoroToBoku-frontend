import { islandPreset } from '../config/dressUpItems';
import { getState } from '../config/state';

/**
 * ボタンエレメントを生成します
 * @param {string} imageSrc
 * @param {string} alt
 * @returns {HTMLButtonElement}
 */
const createDressUpItem = (imageSrc, alt, selected = false) => {
  const buttonElement = document.createElement('button');
  buttonElement.classList.add(
    'ui-window__edit-item',
    selected && 'ui-window__edit-item--selected'
  );
  const imageElement = document.createElement('img');
  imageElement.src = imageSrc;
  imageElement.alt = alt;
  buttonElement.appendChild(imageElement);
  return buttonElement;
};
/**
 * リストにデータを挿入します。
 * @returns {void}
 */
const islandDressList = document.getElementById('islandDressList');
export const dressUpIslandItem = () => {
  Object.keys(islandPreset).forEach((key) => {
    const { name, imageSrc } = islandPreset[key];
    const globalStaet = getState();
    islandDressList.appendChild(
      createDressUpItem(imageSrc, name, globalStaet.islandPreset === key)
    );
  });
};
