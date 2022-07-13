import { makeAutoObservable } from 'mobx';
import {
  getWords as getwordsFetch,
  addWord,
  deleteWord,
  updateWord,
} from './requests';
class WordStore {
  words = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }
  getWords() {
    getwordsFetch()
      .then((result) => {
        this.words = [...result];
      })
      .catch((err) => console.log(err));
  }
  addWord(word) {}
  deleteWord() {}
  editWord() {}
}
export default new WordStore();
