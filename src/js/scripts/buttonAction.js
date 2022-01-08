import { displayData } from '../config/display.js';
import { changeDisplay } from '../functions/display.js';
const tweetButton = document.getElementById('tweetButton');
tweetButton.addEventListener('click', () => changeDisplay(displayData.tweet));
