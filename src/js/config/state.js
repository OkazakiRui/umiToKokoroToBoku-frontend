const GLOBAL_STATE = {
  username: '',
  islandPreset: '',
  characterDress: '',
};

/**
 * GLOBAL_STATEに値を入れる関数
 * @param {string}
 * @param {any}
 */
export const setState = (key, value) => {
  GLOBAL_STATE[key] = value;
  localStorage.setItem(key, value);
};
export const getState = () => ({
  username: GLOBAL_STATE.username,
  islandPreset: GLOBAL_STATE.islandPreset,
  characterDress: GLOBAL_STATE.characterDress,
});
