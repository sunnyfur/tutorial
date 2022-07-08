const getWords = () =>
  fetch(
    'https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words'
  )
    .then((response) => {
      if (response.ok) {
        // Проверяем что код ответа 200
        return response.json();
      }
      throw new Error('Something went wrong ...');
    })
    .then((response) => response);

const addWord = (word) =>
  fetch(
    `https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/add`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(word),
    }
  );
const deleteWord = (word) =>
  fetch(
    `https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/${word.id}/delete`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }
  );
const updateWord = (word) =>
  fetch(
    `https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/${word.id}/update`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(word),
    }
  );
export { getWords, addWord, deleteWord, updateWord };
