const characterWrap = document.querySelectorAll('.character-wrap div');
const character = document.querySelectorAll('.character-wrap img');

let num = 1;
let intervalId;
/**
 * spriteを実行します。
 * @param {number} 合計枚数
 * @returns {void}
 */
export const sprite = (length) => {
  if (num >= length) num = 1;

  characterWrap[0].style.width = character[0].clientWidth / length + 'px';
  characterWrap[1].style.width = character[1].clientWidth / length + 'px';
  characterWrap[0].style.height = character[0].clientHeight + 'px';
  characterWrap[1].style.height = character[1].clientHeight + 'px';
  character[0].style.left =
    Math.floor(num % length) * characterWrap[0].clientWidth * -1 + 'px';
  character[1].style.left =
    Math.floor(num % length) * characterWrap[1].clientWidth * -1 + 'px';
  num++;
};
