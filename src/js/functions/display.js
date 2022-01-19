import { displayElements } from '../config/display';

/**
 * displayDataの下層objectを引数に渡すと画面が切り替わる
 * @param {object} displayDataのobject
 * @returns {boolean} boolean
 */
export const changeDisplay = (afterDisplayData) => {
  Object.keys(afterDisplayData).forEach((key) => {
    // ToDo: 画面がふわっと切り替わるように変更する
    if (afterDisplayData[key])
      displayElements[key].classList.remove('d-hidden');
    else displayElements[key].classList.add('d-hidden');
  });
  return true;
};
