import text from './data';

const drawCard = (data) => {
  let cardNumber = Math.floor((Math.random() * text.length) + 1);
  return text[cardNumber];
};

export default drawCard;
