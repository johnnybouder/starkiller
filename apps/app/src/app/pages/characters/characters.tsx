import { Search, SearchSize, Table } from '@starkiller/base';
import { FormEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { Character } from '../../types/character';

/* eslint-disable-next-line */
export interface CharacterProps {}

export function Characters(props: CharacterProps) {
  const [filteredData, setFilteredData] = useState<Character[]>([]);
  const [searchText, setSearchText] = useState('');
  const { loading, items, getItems } = useApi();

  const handleSearch = (formEvent: FormEvent, text: string) => {
    formEvent.preventDefault();
    setSearchText(text);
  };

  useEffect(() => {
    if (!loading && items) {
      setFilteredData(
        items.filter((character) =>
          character.name.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }, [items, loading, searchText]);

  useEffect(() => {
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col">
          <h1>Characters</h1>
          <div className="float-right">
            <Search
              id="character-search"
              size={SearchSize.Big}
              onSearch={handleSearch}
            />
          </div>
          <Table
            id="characters-table"
            className="width-full"
            columns={[
              { id: 'id', name: 'ID' },
              { id: 'name', name: 'Name' },
              { id: 'allegeance', name: 'Allegeance' },
              { id: 'lightSaber', name: 'Light Saber' },
            ]}
            data={filteredData.map(({ id, name, allegeance, lightSaber }) => {
              return {
                id,
                name: (
                  <NavLink id={`character-link-${id}`} to={`/characters/${id}`}>
                    {name}
                  </NavLink>
                ),
                allegeance,
                lightSaber,
              };
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default Characters;
