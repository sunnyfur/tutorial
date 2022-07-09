const isEmpty = (value) =>
  value.trim().length > 0 ? undefined : 'Обязательно для заполнения';

const checkValidation = (word) => {
  const newErrors = Object.keys(word).reduce((errors, item) => {
    let result = { ...errors };

    switch (item) {
      case 'english':
        result = {
          ...errors,

          [item]: /^[a-z]*$/i.test(word[item])
            ? isEmpty(word[item])
            : 'Допускаются только английские буквы',
        };
        break;
      case 'transcription':
        result = {
          ...errors,
          [item]: isEmpty(word[item]),
        };
        break;
      case 'russian':
        result = {
          ...errors,
          [item]: /^[а-я]*$/i.test(word[item])
            ? isEmpty(word[item])
            : 'Допускаются только русские буквы',
        };
        break;
      case 'tags':
        break;
      default:
    }

    return result;
  }, {});
  console.log(newErrors);
  return newErrors;
};
export default checkValidation;
