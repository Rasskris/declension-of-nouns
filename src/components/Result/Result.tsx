import { FC } from 'react';
import './Result.scss';

interface ResultProps {
  word: string;
}

export const Result: FC<ResultProps> = ({ word }) => {
  return (
    <div className="result">
      <p className="word">{word}</p>
    </div>
  );
};
