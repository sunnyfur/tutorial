import { makeAutoObservable, runInAction } from 'mobx';
import { getWords, addWord, deleteWord, updateWord } from './requests';

export default class WordStore {
  words = [];
  isLoading = false;
  isLoaded = false;
  error = null;
  constructor() {
    makeAutoObservable(this);
  }

  loadData = async () => {
    if (this.isLoaded || this.isLoading) {
      return;
    }

    this.isLoading = true;
    const result = await getWords().catch((err) => (this.error = err));

    runInAction(() => {
      this.words = result;
      this.isLoading = false;
      this.isLoaded = false;
    });
  };
  clearError() {
    this.error = null;
  }
  wordAdd = async (word) => {
    const result = await addWord(word).catch((err) => (this.error = err));
    runInAction(() => {
      // this.words = result;
      this.loadData();
    });
  };
  wordDelete = async (word) => {
    const result = await deleteWord(word).catch((err) => (this.error = err));
    runInAction(() => {
      // this.words = result;
      this.loadData();
    });
  };
  wordEdit = async (word) => {
    const result = await updateWord(word).catch((err) => (this.error = err));
    runInAction(() => {
      // this.words = result;
      this.loadData();
    });
  };
  wordGet() {
    fetch(`http://itgirlschool.justmakeit.ru/api/words/${idWord}`)
      .then((response) => {
        if (response.ok) {
          // Проверяем что код ответа 200
          return response.json();
        }
        throw new Error('Something went wrong ...');
      })
      .then((response) => {
        console.log('word', response);
        return response;
      })
      .catch((err) => console.log(err));
  }
}
