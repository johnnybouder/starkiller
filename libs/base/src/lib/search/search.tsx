import { FormEvent } from 'react';
import classnames from 'classnames';

export interface SearchProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The size of the search
   */
  size?: SearchSize;
  /**
   * The placeholder of the search
   */
  placeholder?: string;
  /**
   * Callback method to be invoked when search form is submitted
   */
  onSearch?: (event: FormEvent<HTMLFormElement>, searchText: string) => void;
  /**
   * Props for the input
   */
  inputProps?: JSX.IntrinsicElements['input'];
}

export enum SearchSize {
  Default = 'Default',
  Small = 'Small',
  Big = 'Big',
}

export function Search({
  id,
  size = SearchSize.Default,
  placeholder = '',
  onSearch,
  inputProps = {},
}: SearchProps) {
  const classes = classnames('usa-search', {
    'usa-search--small': size === SearchSize.Small,
    'usa-search--big': size === SearchSize.Big,
  });

  return (
    <form id={id} className={classes} role="search" onSubmit={onSubmit}>
      <label className="usa-sr-only" htmlFor={`${id}__search-field`}>
        Search
      </label>
      <input
        className="usa-input"
        id={`${id}__search-field`}
        type="search"
        name="search"
        placeholder={placeholder}
        {...inputProps}
      />
      <button className="usa-button" type="submit">
        <span
          className={
            size === SearchSize.Small
              ? 'usa-sr-only'
              : 'usa-search__submit-text'
          }
        >
          Search
        </span>
      </button>
    </form>
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    if (onSearch) {
      const form = event.target as unknown as {
        elements: { search: { value: string } };
      };
      onSearch(event, form.elements.search.value);
    }
  }
}

export default Search;
