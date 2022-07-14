import { observer, inject } from 'mobx-react';
import Loader from '../../components/Loader/Loader';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

const WordsApi = ({ children, wordStore }) => {
  if (wordStore.isLoading) {
    return <Loader />;
  }
  if (wordStore.error) {
    return (
      <ErrorComponent
        message={wordStore.error.message}
        onClick={() => wordStore.clearError()}
      />
    );
  }
  return <>{children}</>;
};

export default inject(['wordStore'])(observer(WordsApi));
