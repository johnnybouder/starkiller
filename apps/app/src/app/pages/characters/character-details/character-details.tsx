import { Card } from '@starkiller/base';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Character } from '../../../types/character';
import { characters } from '../../../types/__test_data__/character.fixture';

/* eslint-disable-next-line */
export interface CharacterDetailsProps {}

export function CharacterDetails(props: CharacterDetailsProps) {
  const [character, setCharacter] = useState<Character>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const currentChar = characters.find((elem) => elem.id === parseInt(id));
      setCharacter(currentChar);
    }
  }, [id]);

  return (
    <div className="grid-container">
      {character ? (
        <div className="grid-row">
          <div className="grid-col">
            <h1>{character.name}</h1>
            <Card id="character-card">
              <div>Allegience: {character.allegeance}</div>
              <div>Light Saber: {character.lightSaber}</div>
            </Card>
          </div>
        </div>
      ) : (
        <>No Character Found</>
      )}
    </div>
  );
}

export default CharacterDetails;
