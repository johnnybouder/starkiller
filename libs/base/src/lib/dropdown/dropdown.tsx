import classNames from 'classnames';
import { ChangeEventHandler } from 'react';

export interface DropdownOption {
  /**
   * The value for the option
   */
  value: string | ReadonlyArray<string> | number;
  /**
   * The label for the option
   */
  label: string;
}

export interface DropdownProps {
  /**
   * The unique identifier for the dropdown
   */
  id: string;

  /**
   * The name of the dropdown
   */
  name: string;

  /**
   * The default option of the dropdown
   */
  defaultOption?: DropdownOption | null;

  /**
   * The options of the dropdown
   */
  options?: DropdownOption[];

  /**
   * Event handler for when value of dropdown is change
   */
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export function Dropdown({
  defaultOption = { value: '', label: '- Select -' },
  options,
  onChange,
  className,
  ...selectProps
}: DropdownProps & JSX.IntrinsicElements['select']) {
  return (
    <select
      className={classNames('usa-select', className)}
      onChange={onChange}
      {...selectProps}
    >
      {createOption(defaultOption, -1)}
      {options?.map(createOption)}
    </select>
  );
}

const createOption = (option: DropdownOption | null, optionIndex: number) =>
  option && (
    <option value={option.value} key={optionIndex}>
      {option.label}
    </option>
  );

export default Dropdown;
