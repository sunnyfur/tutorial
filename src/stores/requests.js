const getWords = () =>
  fetch('/itgirlschool/api/words')
    .then((response) => {
      if (response.ok) {
        // Проверяем что код ответа 200
        return response.json();
      }
      if (response.status === 404)
        throw new Error('Error in the request address');
      throw new Error('Something went wrong ...');
    })
    .then((response) => response);

const addWord = (word) =>
  fetch(`/itgirlschool/api/words/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(word),
  }).then((response) => {
    if (!response.ok) {
      console.log('fghjk');
      throw new Error('Something went wrong, word did not add ...');
    }
  });

const deleteWord = (word) =>
  fetch(`/itgirlschool/api/words/${word.id}/delete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  }).then((response) => {
    if (!response.ok)
      throw new Error('Something went wrong, word did not add ...');
  });
const updateWord = (word) =>
  fetch(`/itgirlschool/api/words/${word.id}/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(word),
  }).then((response) => {
    if (!response.ok)
      throw new Error('Something went wrong, word did not add ...');
  });
const getWord = (word) =>
  fetch(`/itgirlschool/api/words/${word.id}`)
    .then((response) => {
      if (response.ok) {
        // Проверяем что код ответа 200
        return response.json();
      }
      if (response.status === 404)
        throw new Error('Error in the request address');
      throw new Error('Something went wrong ...');
    })
    .then((response) => response);
export { getWords, addWord, deleteWord, updateWord, getWord };
