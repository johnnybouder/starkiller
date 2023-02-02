import { useState } from 'react';
import { Character } from '../types/character';

const useApi = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [items, setItems] = useState<Character[]>();
  const [item, setItem] = useState<Character>();

  const getItems = () => {
    const url = '/api/characters';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setLoading(false);
        setItems(json);
      });
  };

  const getItem = (id: number) => {
    const url = `/api/characters/${id}`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setLoading(false);
        setItem(json);
      });
  };

  return { loading, items, item, getItems, getItem };
};

export default useApi;
