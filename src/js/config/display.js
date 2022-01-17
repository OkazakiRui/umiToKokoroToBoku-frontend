export const displayElements = {
  tweetButton: document.getElementById('tweetButton'),
  navigationBar: document.getElementById('navigationBar'),
  tweetWindow: document.getElementById('tweetWindow'),
  bottleWindow: document.getElementById('bottleWindow'),
};
export const displayData = {
  default: {
    tweetButton: true,
    navigationBar: true,
    tweetWindow: false,
    bottleWindow: false,
  },
  tweet: {
    tweetButton: false,
    navigationBar: true,
    tweetWindow: true,
    bottleWindow: false,
  },
  bottle: {
    tweetButton: false,
    navigationBar: true,
    tweetWindow: false,
    bottleWindow: true,
  },
  dressUp: {},
  islandChange: {},
};
