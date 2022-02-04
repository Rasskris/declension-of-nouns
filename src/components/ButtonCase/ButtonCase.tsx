import { FC, MouseEventHandler } from 'react';
import classnames from 'classnames';
import './ButtonCase.scss';

interface ButtonProps {
  children: string;
  isActive?: boolean;
  disabled?: boolean;
  onClick: MouseEventHandler;
}

export const ButtonCase: FC<ButtonProps> = ({ children, isActive, disabled, onClick }) => {
  const classes = classnames('btn', {
    active: isActive,
  });

  return (
    <button className={classes} type="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
