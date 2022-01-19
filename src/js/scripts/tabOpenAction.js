import { getState, setState } from '../config/state';
import { randomCreateBottle } from '../functions/bottle';
import { dressUpIslandItem } from '../functions/dressUpListAddItem';

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
    : null
);

// mainに島のプリセットを適応している。
const main = document.getElementById('main');
const { islandPreset } = getState();
main.classList.add(islandPreset);

// 島の着せ替えを適応している。
dressUpIslandItem();
//  bottleを30%の確率で生成する
randomCreateBottle();
