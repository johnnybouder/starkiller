import { render } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

import CharacterDetails from './character-details';

describe('Character Details', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <CharacterDetails />
      </BrowserRouter>
    );
    const h1 = baseElement.querySelector('h1');

    expect(baseElement).toBeTruthy();
    expect(h1).toBeFalsy();
  });
  it('should render successfully with data', () => {
    const { baseElement } = render(
      <MemoryRouter initialEntries={['/characters/1']}>
        <Routes>
          <Route path="/characters/:id" element={<CharacterDetails />}></Route>
        </Routes>
      </MemoryRouter>
    );
    const h1 = baseElement.querySelector('h1');

    expect(baseElement).toBeTruthy();
    expect(h1).toBeTruthy();
  });
});
