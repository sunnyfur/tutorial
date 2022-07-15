import { makeAutoObservable, runInAction } from 'mobx';
import { getWords, addWord, deleteWord, updateWord, getWord } from './requests';

export default class WordStore {
  words = [];
  isLoading = false;
  isLoaded = false;
  error = null;
  word = {};
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
  wordGet = async (wordId) => {
    // this.isLoading = true;
    const result = await getWord(wordId).catch((err) => (this.error = err));
    runInAction(() => {
      this.word = result;
      this.isLoading = false;
      this.isLoaded = false;
    });
  };
}
