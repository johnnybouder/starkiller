import { Search, SearchSize, Table } from '@starkiller/base';
import { FormEvent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Character } from '../../types/character';
import { characters } from '../../types/__test_data__/character.fixture';

/* eslint-disable-next-line */
export interface CharacterProps {}

export function Characters(props: CharacterProps) {
  const [data, setData] = useState<Character[]>(characters);
  const [searchText, setSearchText] = useState('');
  const handleSearch = (formEvent: FormEvent, text: string) => {
    formEvent.preventDefault();
    setSearchText(text);
  };

  useEffect(() => {
    setData(
      characters.filter((character) =>
        character.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);

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
            data={data.map(({ id, name, allegeance, lightSaber }) => {
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
