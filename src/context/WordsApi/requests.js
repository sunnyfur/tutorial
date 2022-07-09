const getWords = () =>
  fetch('/itgirlschool/api/words')
    // 'https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words'
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
    `/itgirlschool/api/words/add`,
    // `https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/add`,
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
    `/itgirlschool/api/words/${word.id}/delete`,
    // `https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/${word.id}/delete`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }
  );
const updateWord = (word) =>
  fetch(
    `/itgirlschool/api/words/${word.id}/update`,
    // `https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru/api/words/${word.id}/update`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(word),
    }
  );
export { getWords, addWord, deleteWord, updateWord };
