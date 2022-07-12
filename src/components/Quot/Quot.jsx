import { useEffect, useState } from 'react';
import * as classnames from 'classnames';
import styles from '../../assets/styles/Components/quote.module.scss';

const Quot = () => {
  const [quot, setQuot] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const resp = async () => {
      await fetch('formastic')
        // await fetch('https://forismatic-proxy.herokuapp.com/')
        .then((response) => {
          console.log('quot', response);
          if (response.ok) {
            return response.json();
          }
          throw new Error('Something went wrong ...');
        })
        // .then((response) => setQuot(response))
        .then((response) => setQuot(response))
        .catch((err) => console.log(err));
      setIsLoading(false);
    };
    resp();
  }, []);

  const figcaption = () => {
    if (quot.quoteAuthor)
      return <figcaption> &mdash; {quot.quoteAuthor}</figcaption>;
    return <></>;
  };

  if (isLoading) return <></>;
  return (
    <figure className={classnames(styles.quote, styles.quote_animate)}>
      <blockquote>{quot.quoteText}</blockquote>

      {figcaption()}
    </figure>
  );
};
export default Quot;
