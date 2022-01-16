// Todo: fetch先を変更する

/**
 * ツイートを投稿する
 * @param {string} post_text
 * @returns {void}
 */
export const sendPost = async (message) => {
  try {
    if (!message) throw new Error('メッセージがありません!');
    const data = {
      post_text: message,
    };
    const parms = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const result = await fetch('http://localhost:8080/api/posts', parms);
    const json = await result.json();
    console.log(json);
  } catch (err) {
    console.log(err);
  }
};
