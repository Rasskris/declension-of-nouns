import { FC, ChangeEventHandler } from 'react';
import './Input.scss';

export interface InputProps {
  value: string;
  label: string;
  type: string;
  placeholder: string;
  error: string;
  onChange: ChangeEventHandler;
}

export const Input: FC<InputProps> = ({ value, label, type, placeholder, error, onChange }) => {
  return (
    <label className="label">
      {label}
      <input className="input" type={type} value={value} placeholder={placeholder} onChange={onChange} required />
      {error && <p className="error">{error}</p>}
    </label>
  );
};
