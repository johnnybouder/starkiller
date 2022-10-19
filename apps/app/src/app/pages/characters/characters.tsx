import { Table } from '@starkiller/base';
import { NavLink } from 'react-router-dom';
import { characters } from '../../types/__test_data__/character.fixture';

/* eslint-disable-next-line */
export interface CharacterProps {}

export function Characters(props: CharacterProps) {
  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col">
          <h1>Characters</h1>
          <Table
            id="characters-table"
            className="width-full"
            columns={[
              { id: 'id', name: 'ID' },
              { id: 'name', name: 'Name' },
              { id: 'allegeance', name: 'Allegeance' },
              { id: 'lightSaber', name: 'Light Saber' },
            ]}
            data={characters.map(({ id, name, allegeance, lightSaber }) => {
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
