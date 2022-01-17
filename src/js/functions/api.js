import notyf from './notyf';
// Todo: fetch先を変更する

/**
 * ツイートを投稿する
 * @param {string} post_text
 * @returns {void}
 */
export const sendPost = async (message) => {
  if (!message) return;
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
  const response = await fetch('http://localhost:8080/api/posts', parms).catch(
    (error) => {
      notyf.error(error);
    }
  );
  response.status === 201
    ? notyf.success('メッセージが正常に登録されました!')
    : notyf.error(`${response.status}: ${response.statusText}`);
};

/**
 * ランダムなツイートを数件取得する
 * @returns {array}
 */
export const getRandomPost = async () => {
  const response = await fetch(
    `http://localhost:8080/api/posts/getRandomPost`
  ).catch((error) => notyf.error(error));
  if (response.status !== 200)
    notyf.error(`${response.status}: ${response.statusText}`);
  return await response.json();
};
