import { Case } from '../interfaces';
import { WORD_END_BY_CASE } from '../constants';
import { normalizeWord, splitWord } from '.';

const caseMap: Case = {
  nominative: (lastLetter: string) => WORD_END_BY_CASE.nominative[lastLetter] ?? '',
  genitive: (lastLetter: string) => WORD_END_BY_CASE.genitive[lastLetter] ?? '',
  dative: (lastLetter: string) => WORD_END_BY_CASE.dative[lastLetter] ?? '',
  accusative: (lastLetter: string) => WORD_END_BY_CASE.accusative[lastLetter] ?? '',
  instrumental: (lastLetter: string) => WORD_END_BY_CASE.instrumental[lastLetter] ?? '',
  prepositional: (lastLetter: string) => WORD_END_BY_CASE.prepositional[lastLetter] ?? '',
};

export const getWordEndByCase = (word: string, caseName: string) => {
  const normalizedWord = normalizeWord(word);
  const { wordWithoutLastLetter, lastLetter } = splitWord(normalizedWord);
  const endWordByCase = caseMap[caseName](lastLetter);

  return `${wordWithoutLastLetter}${endWordByCase}`;
};
