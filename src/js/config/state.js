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
};
