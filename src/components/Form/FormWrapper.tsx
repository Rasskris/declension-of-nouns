import { FC } from 'react';
import './Form.scss';

interface FormWrapperProps {
  children: JSX.Element;
}

export const FormWrapper: FC<FormWrapperProps> = ({ children }) => {
  return <section className="form-wrapper">{children}</section>;
};
