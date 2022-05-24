import { useEffect, useState } from 'react';
import styles from '../../assets/styles/Components/quote.module.scss';

const Quot = () => {
  const [quot, setQuot] = useState({
    quoteText: 'The world makes way for the man who knows where he is going. ',
    quoteAuthor: 'Ralph Emerson',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?',
      {
        method: 'get',
        mode: 'no-cors',
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong ...');
      })
      .then((response) => setQuot(response))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [quot]);

  if (isLoading) return <></>;
  return (
    <figure className={styles.quote}>
      <blockquote>{quot.quoteText}</blockquote>
      <figcaption>&mdash; {quot.quoteAuthor}</figcaption>
    </figure>
  );
};
export default Quot;
