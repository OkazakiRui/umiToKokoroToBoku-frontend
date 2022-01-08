import { displayData } from './display';

const GLOBAL_STATE = {
  display: displayData.default,
};

/**
 * Description
 * @param {string} key
 * @param {any} value
 */
export const setState = (key, value) => {
  GLOBAL_STATE[key] = value;
};
