export const displayElements = {
  tweetButton: document.getElementById('tweetButton'),
  navigationBar: document.getElementById('navigationBar'),
  tweetWindow: document.getElementById('tweetWindow'),
  bottleWindow: document.getElementById('bottleWindow'),
  islandDressUpWindow: document.getElementById('islandDressUpWindow'),
};
export const displayData = {
  default: {
    tweetButton: true,
    navigationBar: true,
    tweetWindow: false,
    bottleWindow: false,
    islandDressUpWindow: false,
  },
  tweet: {
    tweetButton: false,
    navigationBar: true,
    tweetWindow: true,
    bottleWindow: false,
    islandDressUpWindow: false,
  },
  bottle: {
    tweetButton: false,
    navigationBar: true,
    tweetWindow: false,
    bottleWindow: true,
    islandDressUpWindow: false,
  },
  dressUp: {},
  islandDressUpButton: {
    tweetButton: false,
    navigationBar: false,
    tweetWindow: false,
    bottleWindow: false,
    islandDressUpWindow: true,
  },
};
