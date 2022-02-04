import { MapWordEnd } from './interfaces';

export const REG_EXP_INPUT = /^[а-яА-ЯёЁ]{2,}$/;

export const PLACEHOLDER = 'например: кошка';

export const LABEL = 'Введите слово в именительном падеже в ед. числе.';

export const ERROR_MESSAGE = 'Слово должно содержать не меньше двух букв и только кириллицу';

export const CASES = [
  {
    name: 'Им.п.',
    caseName: 'nominative',
  },
  {
    name: 'Род.п.',
    caseName: 'genitive',
  },
  {
    name: 'Дат.п.',
    caseName: 'dative',
  },
  {
    name: 'Вин.п.',
    caseName: 'accusative',
  },
  {
    name: 'Тв.п.',
    caseName: 'instrumental',
  },
  {
    name: 'Пр.п.',
    caseName: 'prepositional',
  },
];

export const WORD_END_BY_CASE: MapWordEnd = {
  nominative: {
    а: 'a',
    я: 'я',
    о: 'о',
    е: 'е',
    ь: 'ь',
    ' ': '',
  },
  genitive: {
    а: 'и',
    я: 'и',
    о: 'а',
    е: 'я',
    ь: 'и',
    ' ': 'а',
  },
  dative: {
    а: 'е',
    я: 'е',
    о: 'у',
    е: 'ю',
    ь: 'и',
    ' ': 'у',
  },
  accusative: {
    а: 'у',
    я: 'ю',
    о: 'о',
    е: 'е',
    ь: 'ь',
    ' ': '',
  },
  instrumental: {
    а: 'ой',
    я: 'ей',
    о: 'ом',
    е: 'ем',
    ь: 'ью',
    ' ': 'ом',
  },
  prepositional: {
    а: 'е',
    я: 'е',
    о: 'е',
    е: 'е',
    ь: 'и',
    ' ': 'e',
  },
};
