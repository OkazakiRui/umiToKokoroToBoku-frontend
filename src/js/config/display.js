export const displayElements = {
  tweetButton: document.getElementById('tweetButton'),
  navigationBar: document.getElementById('navigationBar'),
  tweetWindow: document.getElementById('tweetWindow'),
  bottleWindow: document.getElementById('bottleWindow'),
  dressUpWindow: document.getElementById('dressUpWindow'),
};
export const displayData = {
  default: {
    tweetButton: true,
    navigationBar: true,
    tweetWindow: false,
    bottleWindow: false,
    dressUpWindow: false,
  },
  tweet: {
    tweetButton: false,
    navigationBar: true,
    tweetWindow: true,
    bottleWindow: false,
    dressUpWindow: false,
  },
  bottle: {
    tweetButton: false,
    navigationBar: true,
    tweetWindow: false,
    bottleWindow: true,
    dressUpWindow: false,
  },
  dressUp: {
    tweetButton: false,
    navigationBar: false,
    tweetWindow: false,
    bottleWindow: false,
    dressUpWindow: true,
  },
  islandChange: {},
};
