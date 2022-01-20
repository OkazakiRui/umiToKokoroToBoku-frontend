import { getState, setState } from '../config/state';
import { randomCreateBottle } from '../functions/bottle';
import {
  dressUpCharacterItem,
  dressUpIslandItem,
} from '../functions/dressUpListAddItem';

// localstorageにデータがあればそれをglobalstateにセットする
setState(
  'username',
  localStorage.getItem('username') ? localStorage.getItem('username') : null
);
setState(
  'islandPreset',
  localStorage.getItem('islandPreset')
    ? localStorage.getItem('islandPreset')
    : 'preset1'
);
setState(
  'characterDress',
  localStorage.getItem('characterDress')
    ? localStorage.getItem('characterDress')
    : 'character'
);

// mainに島のプリセットを適用している
const main = document.getElementById('main');
const { islandPreset } = getState();
main.classList.add(islandPreset);

//  characterの着せ替えを適用している
const characterDressImage = document.getElementById('characterDressImage');
const { characterDress } = getState();
characterDressImage.src = `./images/character/walk/${characterDress}.png`;

// 島の着せ替えを適応している。
dressUpIslandItem();
// キャラの着せ替えを適応している。
dressUpCharacterItem();
//  bottleを30%の確率で生成する
randomCreateBottle();
