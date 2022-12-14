import { ReactNode } from 'react';
import classNames from 'classnames';

/* eslint-disable-next-line */
export interface FormGroupProps {
  /**
   * The unique identifier for this component
   */
  id?: string;
  /**
   * An array of string error messages
   */
  errors?: string[];
  /**
   * Additional class name for the form group
   */
  className?: string;
  /**
   * The contents of the form group
   */
  children: ReactNode;
}

export function FormGroup({
  id = undefined,
  errors,
  className,
  children,
}: FormGroupProps) {
  const hasErrors = errors && errors.length > 0 ? true : false;
  const classes = classNames(
    'usa-form-group',
    {
      'usa-form-group--error': hasErrors,
    },
    className
  );

  return (
    <div id={id} className={classes}>
      {children}
    </div>
  );
}

export default FormGroup;
