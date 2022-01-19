import { getState, setState } from '../config/state';

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

const main = document.getElementById('main');
const { islandPreset } = getState();
main.classList.add(islandPreset);
