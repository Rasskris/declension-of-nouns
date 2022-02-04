export const LAST_LETTERS = ['а', 'я', 'о', 'е', 'ь'];

export const splitWord = (word: string) => {
  const lastLetter = word.slice(-1);

  if (!LAST_LETTERS.includes(lastLetter)) {
    return { wordWithoutLastLetter: word, lastLetter: ' ' };
  }

  const wordWithoutLastLetter = word.slice(0, -1);

  return { wordWithoutLastLetter, lastLetter };
};
