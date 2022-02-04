import { ChangeEvent, FC, useState } from 'react';
import { getWordEndByCase } from '../../helpers';
import { CASES, LABEL, PLACEHOLDER, REG_EXP_INPUT, ERROR_MESSAGE } from '../../constants';
import { FormWrapper } from './FormWrapper';
import { ButtonCase, Input, Result } from '..';
import './Form.scss';

const initHandledWord = { handledWord: '', currentCase: '' };

export const Form: FC = () => {
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [{ handledWord, currentCase }, setHandledWord] = useState(initHandledWord);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    !REG_EXP_INPUT.test(value) ? setError(ERROR_MESSAGE) : setError('');
    setInputValue(target.value);
  };

  const handleClickButton = (caseName: string) => () => {
    if (inputValue) {
      const handledWord = getWordEndByCase(inputValue, caseName);
      setHandledWord({ handledWord, currentCase: caseName });
    }
  };

  const handleResetInput = () => {
    setInputValue('');
    setHandledWord(initHandledWord);
  };

  return (
    <FormWrapper>
      <div className="form">
        <Input
          value={inputValue}
          type="text"
          label={LABEL}
          placeholder={PLACEHOLDER}
          error={error}
          onChange={handleChange}
        />
        <p className="title-case">Выберите падеж</p>
        <div className="btn-container">
          {CASES.map(({ name, caseName }) => (
            <ButtonCase
              key={caseName}
              isActive={caseName === currentCase}
              onClick={handleClickButton(caseName)}
              disabled={!!error}
            >
              {name}
            </ButtonCase>
          ))}
          <button className="btn-reset" type="reset" onClick={handleResetInput}>
            Сбросить
          </button>
        </div>
        {inputValue && handledWord && <Result word={handledWord} />}
      </div>
    </FormWrapper>
  );
};
