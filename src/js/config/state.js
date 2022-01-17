import { displayData } from './display';

const GLOBAL_STATE = {
  display: displayData.default,
  posts: [],
};

/**
 * GLOBAL_STATEに値を入れる関数
 * @param {string}
 * @param {any}
 */
export const setState = (key, value) => {
  GLOBAL_STATE[key] = value;
};
