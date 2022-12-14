import classNames from 'classnames';

export interface FormProps {
  /**
   * Whether to render a large form
   */
  isLarge?: boolean;
}

export function Form({
  isLarge = false,
  className,
  children,
  ...formProps
}: FormProps & JSX.IntrinsicElements['form']) {
  return (
    <form
      className={classNames(
        'usa-form',
        { 'usa-form--large': isLarge },
        className
      )}
      {...formProps}
    >
      {children}
    </form>
  );
}

export default Form;
