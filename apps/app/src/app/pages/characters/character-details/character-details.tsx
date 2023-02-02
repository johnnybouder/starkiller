import { Card } from '@starkiller/base';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../../../hooks/useApi';
import { Character } from '../../../types/character';

/* eslint-disable-next-line */
export interface CharacterDetailsProps {}

export function CharacterDetails(props: CharacterDetailsProps) {
  const [character, setCharacter] = useState<Character>();
  const { id } = useParams();
  const { loading, item, getItem } = useApi();

  useEffect(() => {
    if (!loading && item) {
      setCharacter(item);
    }
  }, [loading, item]);

  useEffect(() => {
    if (id) {
      getItem(parseInt(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
