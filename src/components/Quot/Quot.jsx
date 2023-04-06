import { useEffect, useState } from 'react';
import * as classnames from 'classnames';
import styles from '../../assets/styles/Components/quote.module.scss';

const Quot = () => {
  const [quot, setQuot] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const resp = async () => {
      await fetch('https://quotes15.p.rapidapi.com/quotes/random/', {
        method: 'GET',
        params: { language_code: 'en' },
        headers: {
          'X-RapidAPI-Key':
            '122c4105f7mshbc51b32c59e1e20p1b747bjsnbf273f86b20d',
          'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
        },
      })
        // await fetch('https://forismatic-proxy.herokuapp.com/')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Something went wrong ...');
        })
        // .then((response) => setQuot(response))
        .then((response) => {
          setQuot(response);
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    };
    resp();
  }, []);

  const figcaption = () => {
    if (quot.originator.name)
      return <figcaption> &mdash; {quot.originator.name}</figcaption>;
    return <></>;
  };

  if (isLoading) return <></>;
  return (
    <figure className={classnames(styles.quote, styles.quote_animate)}>
      <blockquote>{quot.content}</blockquote>

      {figcaption()}
    </figure>
  );
};
export default Quot;
